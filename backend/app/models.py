from sqlalchemy import Boolean, Column, Integer, String, Text, Date, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.database import Base

class Visit(Base):
    __tablename__ = "visits"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    timezone = Column(String(100), nullable=False)
    visited_at = Column(DateTime, nullable=False)

# Mixin for created_at / updated_at
class TimestampMixin:
    created_at = Column(DateTime, server_default=func.now(), nullable=False)
    updated_at = Column(
        DateTime,
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False
    )

class User(Base, TimestampMixin):
    __tablename__ = "users"

    id            = Column(Integer, primary_key=True)
    username      = Column(String(50), unique=True, index=True, nullable=False)
    email         = Column(String(100), unique=True, index=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    # projects = relationship("Project", back_populates="owner")

class Project(Base, TimestampMixin):
    __tablename__ = "projects"

    id          = Column(Integer, primary_key=True)
    title       = Column(String(100), index=True, nullable=False)
    description = Column(Text, nullable=False)
    image_url   = Column(String(255))
    project_url = Column(String(255))
    github_url  = Column(String(255))

class Skill(Base, TimestampMixin):
    __tablename__ = "skills"

    id          = Column(Integer, primary_key=True)
    name        = Column(String(50), index=True, nullable=False)
    category    = Column(String(50), index=True)
    proficiency = Column(Integer, nullable=False)

class Experience(Base, TimestampMixin):
    __tablename__ = "experience"

    id          = Column(Integer, primary_key=True)
    company     = Column(String(100), index=True, nullable=False)
    position    = Column(String(100), nullable=False)
    start_date  = Column(Date, nullable=False)
    end_date    = Column(Date)
    is_current  = Column(Boolean, default=False, nullable=False)
    description = Column(Text)

class ContactMessage(Base, TimestampMixin):
    __tablename__ = "contact_messages"

    id      = Column(Integer, primary_key=True)
    name    = Column(String(100), nullable=False)
    email   = Column(String(100), nullable=False)
    subject = Column(String(200))
    message = Column(Text, nullable=False)
    is_read = Column(Boolean, default=False, nullable=False)
