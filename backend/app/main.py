# backend/app/main.py

from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import database engine and Base
from .database import Base, engine
# Import routers via relative paths
from .routes.visits import router as visits_router
from .routes.contact import router as contact_router

# Ensure all models are registered for table creation
from . import models

# Create tables based on models
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Portfolio API",
    description="Backend for portfolio project",
    version="0.1.0"
)

# Enable CORS for the frontend
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

# Mount routers
app.include_router(visits_router,  prefix="/api/visits",  tags=["visits"])
app.include_router(contact_router, prefix="/api/contact", tags=["contact"])
