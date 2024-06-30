#import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Milanga(db.Model):
    __tablename__ = 'milanga'
    id = db.Column(db.Integer, primary_key=True)
    tipo_pan = db.Column(db.String(500), nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'))


class Usuario(db.Model):
    __tablename__ = 'usuarios'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(500), nullable=False)
