from fastapi import FastAPI

app = FastAPI(title="Threads Manager")


@app.get("/health")
async def health_check():
    return {"status": "ok"}
