from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://postgres:PostgreSQL2026@localhost:5432/veick_db"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)