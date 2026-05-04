from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import SessionLocal
from app.db import models
from app.core.security import verify_password, create_token, hash_password

router = APIRouter()

# conexión DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/test")
def test():
    return {"msg": "auth ok"}


# 🔹 REGISTER (NUEVO)
@router.post("/register")
def register(data: dict, db: Session = Depends(get_db)):

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        raise HTTPException(status_code=400, detail="Faltan datos")

    existing = db.query(models.User).filter_by(email=email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Usuario ya existe")

    user = models.User(
        email=email,
        password_hash=hash_password(password)
    )

    db.add(user)
    db.commit()

    return {"msg": "usuario creado"}


# 🔹 LOGIN
@router.post("/login")
def login(data: dict, db: Session = Depends(get_db)):
    user = db.query(models.User).filter_by(email=data["email"]).first()

    if not user or not verify_password(data["password"], user.password_hash):
        raise HTTPException(status_code=401, detail="Credenciales inválidas")

    token = create_token({"user_id": str(user.id)})
    return {"token": token}