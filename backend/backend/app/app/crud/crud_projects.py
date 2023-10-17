from typing import List
from app.crud.base import CRUDBase, ModelType
from app.models.projects import Projects
from app.schemas.projects import ProjectCreate, ProjectUpdate
from sqlalchemy.orm import Session
from sqlalchemy import func


class CRUDProjects(CRUDBase[
    Projects,
    ProjectCreate,
    ProjectUpdate
]):
    def get_multi_by_user(
        self, db: Session, *, skip: int = 0, limit: int = 100
    ) -> List[ModelType]:
        return db.query(self.model).offset(skip).limit(limit).all()

    def remove_by_uuid(self, db: Session, *, uuid: str) -> None:
        obj = db.query(self.model).where(self.model.uuid == uuid).first()
        if obj:
            db.delete(obj)
            db.commit()
            return obj

    def get_by_uuid(self, db: Session, *, uuid: str) -> None:
        obj = db.query(self.model).where(self.model.uuid == uuid).first()
        return obj

    def get_many_by_favorites(
        self, db: Session, *, skip: int = 0, limit: int = 100, is_favorite: bool = False
    ) -> List[ModelType]:
        return db.query(self.model).where(self.model.is_favorite == is_favorite).offset(skip).limit(limit).all()

    def count_by_favorites(self, db: Session, is_favorite: bool = False) -> int:
        return db.query(func.count(self.model.id)).where(self.model.is_favorite == is_favorite).all()

    def update_favorite_by_uuid(self, db: Session, db_obj: Projects, is_favorite: bool = False):
        setattr(db_obj, 'is_favorite', is_favorite)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj
  
projects = CRUDProjects(Projects)
