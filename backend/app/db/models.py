import uuid
from sqlalchemy import Column, String, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from app.db.base import Base

class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)

    from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class AlexaDevice(Base):
    __tablename__ = "alexa_devices"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), unique=True)

    amazon_email = Column(String, nullable=False)
    cookie_path = Column(String)
    config_path = Column(String)
    status = Column(String, default="AUTH_REQUIRED")

    user = relationship("User")