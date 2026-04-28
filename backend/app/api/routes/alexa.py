from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import SessionLocal
from app.db import models
from app.core.security import hash_password, verify_password, create_token

router = APIRouter()

# 🔹 DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# 🔹 REGISTER
@router.post("/register")
def register(data: dict, db: Session = Depends(get_db)):

    existing = db.query(models.User).filter_by(email=data["email"]).first()
    if existing:
        raise HTTPException(status_code=400, detail="User already exists")

    user = models.User(
        email=data["email"],
        password_hash=hash_password(data["password"])
    )

    db.add(user)
    db.commit()

    return {"msg": "user creado"}

# 🔹 LOGIN
@router.post("/login")
def login(data: dict, db: Session = Depends(get_db)):

    user = db.query(models.User).filter_by(email=data["email"]).first()

    if not user or not verify_password(data["password"], user.password_hash):
        raise HTTPException(status_code=401, detail="Credenciales inválidas")

    token = create_token({"user_id": str(user.id)})
    return {"token": token}