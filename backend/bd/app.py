#import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Milanga(db.Model):
    __tablename__ = 'milanga'
    id = db.Column(db.Integer, primary_key=True)
    pan = db.Column(db.String(500), nullable=False)
    carne = db.Column(db.String(500), nullable=False)
    ensalada = db.Column(db.String(500))
    milanesa = db.Column(db.String(500), nullable=False)
    papas = db.Column(db.String(500))
    #fecha_creacion = db.Column(db.DateTime, default=datetime.datetime.now())
    #usuario_id = db.Column(db.Integer, db.ForeingKey('usuario.id'))

class Usuario(db.Model):
    __tablename__ = 'usuarios'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(500), nullable=False)
    edad = db.Column(db.Integer, nullable=False)
    imagen = db.Column(db.String(500), nullable=False)
    #email = db.Column(db.String(500), unique=True, nullable=False)
    #fecha_creacion = db.Column(db.DateTime, default=datetime.datetime.now())
    #milangas = db.relationship("Milanga")