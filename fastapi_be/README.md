# Boilerplate FastAPI v2

### Following real world application boilerplate

###### Run the app

```bash
uvicorn main:app --reload
```
api -> agent -> llm -> agent -> mcp -> agent -> llm -> api

book flight 

1. user ask about flight like destination and date or price
2. agent hit llm
3. llm get reponse
4. llm ask back the llm , with providing i have these mcp tools on my mcp server , so which tools should use
5. llm return response
6. agent hit that mcp tools
7. agent get response
8. agent send info back to client of the flight to book
9. render in frontend ( with stripe info - optional )
10. user click yes and goes topayment bage when click confirm and do payment - optional
