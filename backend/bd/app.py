import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Milanga(db.model):
    __tablename__ = 'milanga'



class Usuario(db.model):
    __tablename__ = 'usuarios'
    