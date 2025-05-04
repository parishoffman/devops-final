from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
import app.models  # ensure all your models are registered
from app.routes.example import router as example_router

# Create all database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Portfolio API",
    description="Backend for portfolio project",
    version="0.1.0"
)

# CORS: allow frontend (localhost:3000) to talk to this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", tags=["health"])
def health_check():
    return {"status": "ok"}

# Mount your example router at /api/example
app.include_router(example_router, prefix="/api/example", tags=["example"])
