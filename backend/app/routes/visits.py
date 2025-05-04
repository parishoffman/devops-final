from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Visit
from app.schemas import VisitCreate

router = APIRouter()

@router.post("/", summary="Log a page visit")
def log_visit(data: VisitCreate, db: Session = Depends(get_db)):
    v = Visit(timezone=data.timezone, visited_at=data.visited_at)
    db.add(v)
    db.commit()
    db.refresh(v)
    return {"status": "logged"}
