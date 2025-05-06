from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Visit
from app.schemas import VisitCreate

router = APIRouter()

@router.post("/", status_code=status.HTTP_201_CREATED, summary="Record a new visit")
def record_visit(visit: VisitCreate, db: Session = Depends(get_db)):
    """
    Inserts a Visit row (timezone + visited_at) into the database.
    """
    db_visit = Visit(timezone=visit.timezone, visited_at=visit.visited_at)
    db.add(db_visit)
    db.commit()
    db.refresh(db_visit)
    return {"status": "recorded", "id": db_visit.id}
