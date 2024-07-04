#import datetime
from flask_sqlalchemy import SQLAlchemy
from enum import Enum

db = SQLAlchemy()

class Milanga(db.Model):
    __tablename__ = 'milanga'
    id = db.Column(db.Integer, primary_key=True)
    tipo_pan = db.Column(db.String(500), nullable=False)
    tipo_carne = db.Column(db.String(500), nullable=False)
    tipo_ensalada = db.Column(db.String(500))
    tipo_milanesa = db.Column(db.String(500), nullable=False)
    tipo_papas = db.Column(db.String(500))

    #usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'))


class Usuario(db.Model):
    __tablename__ = 'usuarios'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(500), nullable=False)
    edad = db.Column(db.Integer, nullable=False)

# test para armar el sandwich

class Panes(Enum):
    PAN_1 = 'Pan Blanco'
    PAN_2 = 'Pan Integral'
    PAN_3 = 'Pan Arabe'

class Milanesas(Enum):
    MILANESA_1 = 'Milanesa de Carne'
    MILANESA_2 = 'Milanesa de Pollo'
    MILANESA_3 = 'Milanesa de Soja'

class Cocciones(Enum):
    COCCION_1 = 'Frita'
    COCCION_2 = 'Horno'
    COCCION_3 = 'Plancha'

class Ensaladas(Enum):
    ENSALADA_1 = 'Lechuga'
    ENSALADA_2 = 'Tomate'
    ENSALADA_3 = 'Huevo'

class Papas(Enum):
    PAPAS_1 = 'Papas Fritas'
    PAPAS_2 = 'Papas al Horno'
    PAPAS_3 = 'Puré'


class Sandwich(db.Model):
    __tablename__ = 'sandwich'
    id = db.Column(db.Integer, primary_key=True)
    pan = db.Column(db.Enum(Panes), nullable=False)
    milanesa = db.Column(db.Enum(Milanesas), nullable=False)
    coccion = db.Column(db.Enum(Cocciones), nullable=False)
    ensalada = db.Column(db.Enum(Ensaladas))
    papas = db.Column(db.Enum(Papas))