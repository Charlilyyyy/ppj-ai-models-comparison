from fastapi import FastAPI, APIRouter
from services import agent_service
# from fastapi import APIRouter
import asyncio
from seeders import users_data
from pydantic import BaseModel
from typing import Optional
from services import chat_store

router = APIRouter()

class PromptRequest(BaseModel):
    prompt: str
    conversation_id: Optional[str] = None
    system_prompt: Optional[str] = None

@router.post("/")
async def ask_agent(data: PromptRequest):
    # try:
    #     return users_data
    # except Exception as e:
    #     return {"status": "error", "message": str(e)}
    try:
        response, conversation_id = await agent_service.run_agent(
            data.prompt,
            data.conversation_id,
            data.system_prompt,
        )
        return {
            "status": "success",
            "response": response,
            "conversation_id": conversation_id,
        }
    except Exception as e:
        return {"status": "error", "message": str(e)}

@router.get("/")
def list_conversations():
    chat_histories = []
    chats = chat_store.list_conversations()  # Assume this returns a list of chat IDs

    for chat in chats:
        conv = chat_store.get_conversation(chat)
        chat_histories.append({
            "chat_id": chat,
            "chat": conv
        })

    return {"conversations": chat_histories}

@router.get("/{conversation_id}")
def get_conversation(conversation_id: str):
    return {
        "conversation_id": conversation_id,
        "messages": chat_store.get_conversation(conversation_id),
    }
