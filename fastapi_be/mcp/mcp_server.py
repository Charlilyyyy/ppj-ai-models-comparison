import os
from typing import Optional, Tuple, List, Dict, Any
from openai import AsyncOpenAI
from dotenv import load_dotenv
from . import chat_store

load_dotenv()

_client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# -------------------------------
# TOOL DEFINITIONS
# -------------------------------

async def check_flight(flight_number: str) -> Dict[str, Any]:
    """Simulate checking flight status from an API."""
    # TODO: Replace with real API call
    return {
        "flight_number": flight_number,
        "status": "On Time",
        "departure": "KUL",
        "arrival": "SIN",
        "departure_time": "2025-08-13T14:00:00",
        "arrival_time": "2025-08-13T15:00:00",
    }

async def show_flight_data(date: str) -> List[Dict[str, Any]]:
    """Simulate fetching available flights for a given date."""
    # TODO: Replace with real API call
    return [
        {
            "flight_number": "MH603",
            "route": "KUL → SIN",
            "time": "14:00 - 15:00",
            "price": 350,
        },
        {
            "flight_number": "AK101",
            "route": "KUL → BKK",
            "time": "16:00 - 18:30",
            "price": 420,
        },
    ]

# Dictionary to map tool names to functions
TOOLS = {
    "check_flight": check_flight,
    "show_flight_data": show_flight_data,
}
