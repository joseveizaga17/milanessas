import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Milanga(db.Model):
    __tablename__ = 'milangas'
    id = db.Column(db.Integer, primary_key=True)
    pan = db.Column(db.String(500), nullable=False)
    milanesa = db.Column(db.String(500), nullable=False)
    ensalada = db.Column(db.String(500))
    coccion = db.Column(db.String(500), nullable=False)
    papas = db.Column(db.String(500))
    fecha_creacion = db.Column(db.DateTime, default=datetime.datetime.now())
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'))

class Usuario(db.Model):
    __tablename__ = 'usuarios'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(500), nullable=False)
    apellido = db.Column(db.String(500), nullable=False)
    edad = db.Column(db.Integer, nullable=False)
    imagen = db.Column(db.String(500), nullable=False)
    email = db.Column(db.String(500), unique=True, nullable=False)
    fecha_creacion = db.Column(db.DateTime, default=datetime.datetime.now())
    milangas = db.relationship("Milanga")