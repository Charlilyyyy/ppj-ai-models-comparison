# app/main.py

from fastapi import FastAPI
from api.router import api_router

app = FastAPI(
    title="My FastAPI App",
    version="1.0.0",
)

app.include_router(api_router, prefix="/api/v1")
