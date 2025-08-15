import os
from typing import Optional, Tuple, List, Dict
from openai import AsyncOpenAI
from dotenv import load_dotenv
from . import chat_store


load_dotenv()

_client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))


async def run_agent(
    prompt: str,
    conversation_id: Optional[str] = None,
    system_prompt: Optional[str] = None,
) -> Tuple[str, str]:
    if not _client.api_key:
        raise RuntimeError("OPENAI_API_KEY environment variable is not set")
    if prompt is None or not isinstance(prompt, str) or not prompt.strip():
        raise ValueError("Prompt must be a non-empty string")

    conversation_id = conversation_id or chat_store.create_conversation_id()

    existing_messages = chat_store.get_conversation(conversation_id)

    messages_for_api: List[Dict[str, str]] = []
    if existing_messages:
        for m in existing_messages:
            messages_for_api.append({"role": m["role"], "content": m["content"]})
    else:
        messages_for_api.append(
            {
                "role": "system",
                "content": system_prompt or "You are a helpful AI assistant.",
            }
        )

    chat_store.append_message(conversation_id, "user", prompt)
    messages_for_api.append({"role": "user", "content": prompt})

    model_name = os.getenv("OPENAI_MODEL", "gpt-5")

    try:
        completion = await _client.chat.completions.create(
            model=model_name,
            messages=messages_for_api,
        )
        message = completion.choices[0].message
        assistant_text = message.content or ""
        chat_store.append_message(conversation_id, "assistant", assistant_text)
        return assistant_text, conversation_id
    except Exception as exc:
        raise RuntimeError(f"LLM call failed: {exc}") from exc
