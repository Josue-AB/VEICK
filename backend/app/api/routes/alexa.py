from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.api.deps import get_current_user
from app.services.alexa_service import get_paths, run_command, create_user_config
from app.db.session import SessionLocal
from app.db import models

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# 🔹 ADD DEVICE
@router.post("/add-device")
def add_device(data: dict, user=Depends(get_current_user), db: Session = Depends(get_db)):

    user_id = user["user_id"]

    existing = db.query(models.AlexaDevice).filter_by(user_id=user_id).first()
    if existing:
        raise HTTPException(status_code=400, detail="Device already exists")

    paths = create_user_config(user_id)

    device = models.AlexaDevice(
        user_id=user_id,
        amazon_email=data["amazon_email"],
        config_path=paths["config"],
        cookie_path=paths["cookie"],
        status="AUTH_REQUIRED"
    )

    db.add(device)
    db.commit()

    return {"msg": "device creado"}


# 🔹 SEND INSTRUCTION
@router.post("/send-instruction")
async def send(data: dict, user=Depends(get_current_user)):
    
    instruction = data.get("instruction")

    if not instruction:
        raise HTTPException(status_code=400, detail="No instruction")

    user_id = user["user_id"]

    paths = get_paths(user_id)

    code, out, err = await run_command(paths["config"], instruction)

    if code != 0:
        raise HTTPException(status_code=401, detail="Alexa error")

    return {"status": "sent", "output": out}


# 🔹 UPLOAD COOKIE (FUERA de send)
@router.post("/upload-cookie")
def upload_cookie(data: dict, user=Depends(get_current_user)):

    user_id = user["user_id"]
    cookie_content = data.get("cookie")

    if not cookie_content:
        raise HTTPException(status_code=400, detail="No cookie provided")

    paths = get_paths(user_id)

    with open(paths["cookie"], "w") as f:
        f.write(cookie_content)

    return {"msg": "cookie guardada"}