from fastapi import FastAPI
from app.db.base import Base
from app.db.session import engine
from app.api.routes import auth, alexa

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth.router, prefix="/api/v1/auth")
app.include_router(alexa.router, prefix="/api/v1/alexa")

@app.get("/")
def home():
    return {"msg": "Backend Veick funcionando"}