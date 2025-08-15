import os
import json
import uuid
import time
import threading
from typing import Dict, List, Literal, TypedDict


Role = Literal["system", "user", "assistant"]


class ChatMessage(TypedDict):
    role: Role
    content: str
    created_at: float


_DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "data")
_FILE_PATH = os.path.join(_DATA_DIR, "chats.json")
_LOCK = threading.RLock()
_STORE: Dict[str, List[ChatMessage]] = {}


def _ensure_dirs() -> None:
    if not os.path.isdir(_DATA_DIR):
        os.makedirs(_DATA_DIR, exist_ok=True)


def _load_store() -> None:
    global _STORE
    _ensure_dirs()
    if os.path.isfile(_FILE_PATH):
        try:
            with open(_FILE_PATH, "r", encoding="utf-8") as f:
                data = json.load(f)
                if isinstance(data, dict):
                    _STORE = {
                        str(k): [
                            {
                                "role": msg.get("role", "user"),
                                "content": msg.get("content", ""),
                                "created_at": float(msg.get("created_at", time.time())),
                            }
                            for msg in (v or [])
                        ]
                        for k, v in data.items()
                    }
        except Exception:
            _STORE = {}


def _persist() -> None:
    tmp_path = _FILE_PATH + ".tmp"
    with open(tmp_path, "w", encoding="utf-8") as f:
        json.dump(_STORE, f, ensure_ascii=False, indent=2)
    os.replace(tmp_path, _FILE_PATH)


def create_conversation_id() -> str:
    return uuid.uuid4().hex


def list_conversations() -> List[str]:
    with _LOCK:
        return list(_STORE.keys())


def get_conversation(conversation_id: str) -> List[ChatMessage]:
    with _LOCK:
        return list(_STORE.get(conversation_id, []))


def set_messages(conversation_id: str, messages: List[ChatMessage]) -> None:
    with _LOCK:
        _STORE[conversation_id] = list(messages)
        _persist()


def append_message(conversation_id: str, role: Role, content: str) -> ChatMessage:
    message: ChatMessage = {
        "role": role,
        "content": content,
        "created_at": time.time(),
    }
    with _LOCK:
        if conversation_id not in _STORE:
            _STORE[conversation_id] = []
        _STORE[conversation_id].append(message)
        _persist()
    return message


# Initialize store at import time
_load_store() 