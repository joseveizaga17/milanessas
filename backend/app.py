from flask import Flask, request, jsonify
from flask_cors import CORS
from bd.app import db, Milanga, Usuario


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI']= 'postgresql+psycopg2://postgres:1234@localhost:5432/milanesas'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False


@app.route('/', methods=["GET"])
def home():
    return """<h1>bienvenido a proyecto Milanga</h1>"""


@app.route('/sandwichs/<id>', methods=['GET'])
def get_sandwich(id):
    data = Milanga.query.get(id)
    dicc = []
    if data == None:
        return jsonify({'ALERT': 'no existe un sandwich con ese id'})
    else: 
        sandwich = {
            'id': id,
            'pan': data.pan,
            'milanesa': data.milanesa,
            'extras': data.extras,
            'coccion': data.coccion,
            'papas': data.papas,
            'fecha_creacion': data.fecha_creacion,
            'usuario_id': data.usuario_id
        }
        dicc.append(sandwich)
        return dicc


@app.route('/sandwichs', methods=['GET'])
def get_all_sandwich():
    try:
        data = Milanga.query.all()
        sandwichs_data = []
        for sandwich in data:
            sandwich_data = {
                "id": sandwich.id,
                "pan": sandwich.pan,
                "milanesa": sandwich.milanesa,
                "extras": sandwich.extras,
                "coccion": sandwich.coccion,
                "papas": sandwich.papas,
                'fecha_creacion': sandwich.fecha_creacion,
                'usuario_id': sandwich.usuario_id
                }
            sandwichs_data.append(sandwich_data)
        return sandwichs_data
    except:
        return jsonify({'success' : False})
    

@app.route('/delete/<id>', methods=['DELETE'])
def delete_sandwich(id):
    identificador = id
    data = Milanga.query.get(identificador)
    
    if data == None:
        return jsonify({'success': False})
    else :
        db.session.delete(data)
        db.session.commit()

        return jsonify({'resultado': True})


@app.route('/create', methods=['POST'])
def create_sandwich():
    try:
        data = request.json
        pan = data.get('pan')
        milanesa = data.get('milanesa')
        extras = data.get('extras')
        coccion = data.get('coccion')
        papas = data.get('papas')
        usuario_id = data.get('usuario_id')

        nuevo_sandwich = Milanga(pan=pan, milanesa=milanesa, extras=extras, coccion=coccion, papas=papas, usuario_id=usuario_id)

        db.session.add(nuevo_sandwich)
        db.session.commit()

        return jsonify({'success':True, 'id': nuevo_sandwich.id})
    except:
        return jsonify({'success' : False})
        

@app.route('/user/create', methods=['POST'])
def create_user():
    try:
        data = request.json

        nombre = data.get('nombre')
        apellido = data.get('apellido')
        edad = data.get('edad')
        imagen = data.get('imagen')
        email = data.get('email')

        new_user = Usuario(nombre=nombre, apellido=apellido, edad=edad, imagen=imagen, email=email)

        db.session.add(new_user)
        db.session.commit()
        return jsonify({'success': True, 'id': new_user.id})
    except:
        return jsonify({'success': False})
   
    
@app.route('/user', methods=['GET'])
def get_all_user():
    try:
        data = Usuario.query.all()
        users_data = []
        for user in data:
            user_data = {
                'id': user.id,
                'nombre': user.nombre,
                'apellido': user.apellido,
                'edad': user.edad,
                'imagen': user.imagen,
                'email': user.email,
                'fecha_creacion': user.fecha_creacion
            }
            users_data.append(user_data)
        return users_data
    except:
        return jsonify({'success': False})
    
# terminarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
@app.route("/user/<id>")
def get_user(id):
    data = Usuario.query.get(id)
    if data == None:
        return jsonify({'succes': False})
    else:
        #dicc = []
        json_user = {
            'id': data.id,
            'nombre': data.nombre,
            'apellido': data.apellido,
            'edad': data.edad,
            'imagen': data.imagen,
            'email': data.email,
            'milangas': []
        }
        for milanga in data.milangas:
            json_milangas = {
                'id': milanga.id,
                'pan': milanga.pan,
                'milanesa': milanga.milanesa,
                'extras': milanga.extras,
                'coccion': milanga.coccion,
                'papas': milanga.papas
            }
            json_user['milangas'].append(json_milangas)
        #dicc.append(json_user)
        return json_user
###############################################################

@app.route('/user/edit/<id>', methods=['PUT'])
def user_edit(id):
    data = request.json

    if data == None:
        return jsonify({'success': False})
    else:
        nombre = data.get('nombre')
        apellido = data.get('apellido')
        edad = data.get('edad')
        imagen = data.get('imagen')
        email = data.get('email')

        content = Usuario.query.get(id)
        content.nombre = nombre
        content.apellido = apellido
        content.edad = edad
        content.imagen = imagen 
        content.email = email

        db.session.commit()
        return jsonify({'success': True})
    

@app.route('/user/delete/<id>', methods=['DELETE'])
def user_delete(id):
    identificador = id
    data = Usuario.query.get(identificador)
    if data == None:
        return jsonify({'success': False})
    else :
        db.session.delete(data)
        db.session.commit()

        return jsonify({'success': True})


if __name__ == '__main__':
    db.init_app(app)
    with app.app_context():
        db.create_all()
    app.run(host='127.0.0.1', debug=True, port=5500)