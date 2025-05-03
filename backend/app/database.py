import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# load .env into os.environ
load_dotenv()

# pull in DATABASE_URL (or fallback)
DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "mysql+pymysql://root:root@db:3306/portfolio"
)

# create the engine
engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
    pool_recycle=3600,
)

# session factory
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

# base for your models
Base = declarative_base()

def get_db():
    """
    FastAPI dependency.
    Yields a SQLAlchemy Session and closes it when done.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
