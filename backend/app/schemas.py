from pydantic import BaseModel, EmailStr
from datetime import datetime

class VisitCreate(BaseModel):
    timezone: str
    visited_at: datetime

class ContactCreate(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    message: str
