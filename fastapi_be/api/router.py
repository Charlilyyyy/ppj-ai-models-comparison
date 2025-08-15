from fastapi import APIRouter
from api.v1 import users
from api.v1 import llm

api_router = APIRouter()
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(llm.router, prefix="/llm", tags=["llm"])
