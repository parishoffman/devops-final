# backend/app/main.py

from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session

# import your Base, engine, and sessionmaker
from app.database import Base, engine, SessionLocal
import app.models  # ensure all models are registered

# import any routers you create
from app.routes.example import router as example_router

# create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Portfolio API",
    description="Backend for portfolio project",
    version="0.1.0"
)

def get_db():
    """
    Dependency that provides a SQLAlchemy session and ensures it’s closed.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/", tags=["health"])
def health_check():
    return {"status": "ok"}

# include your routers
app.include_router(example_router, prefix="/api/example", tags=["example"])
