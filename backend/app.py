from flask import Flask, request, jsonify
from flask_cors import CORS
from bd.app import db, Milanga, Usuario


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI']= 'postgresql+psycopg2://postgres:manu17@localhost:5432/milanesas'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False


@app.route('/', methods=["GET"])
def home():
    return """<h1>Welcome to how to create milanga</h1>"""


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
            'carne': data.carne,
            'ensalada': data.ensalada,
            'milanesa': data.milanesa,
            'papas': data.papas
            #'fecha_creacion': data.fecha_creacion,
            #'usuario_id': data.usuario_id
        }
        dicc.append(sandwich)
        return dicc
#return jsonify({'sandwich': sandwich})


@app.route('/sandwichs', methods=['GET'])
def get_all_sandwich():
    try:
        data = Milanga.query.all()
        sandwichs_data = []
        for sandwich in data:
            sandwich_data = {
                "id": sandwich.id,
                "tipo_pan": sandwich.pan,
                "tipo_carne": sandwich.carne,
                "tipo_ensalada": sandwich.ensalada,
                "tipo_milanesa": sandwich.milanesa,
                "tipo_papas": sandwich.papas
                #'fecha_creacion': data.fecha_creacion,
                #'usuario_id': data.usuario_id
                }
            sandwichs_data.append(sandwich_data)
        return sandwichs_data
    except:
        return jsonify({'alert' : 'error al mostrar todos los sandwich'})
    

@app.route('/delete/<id>', methods=['DELETE'])
def delete_sandwich(id):
    identificador = id
    data = Milanga.query.get(identificador)
    if data == None:
        return jsonify({'ALERT': 'no existe un sandwich con ese id'})
    else :
        db.session.delete(data)
        db.session.commit()

        return jsonify({'resultado': True})


@app.route('/sandwich/edit/<id>', methods=['PUT'])
def edit_sandwich(id):
    data = request.json

    if data == None:
        return jsonify({'ALERT': 'no existe un sandwich con ese id'})
    else :
        pan = data.get("pan")
        carne = data.get("carne")
        ensalada = data.get("ensalada")
        milanesa = data.get("milanesa")
        papas = data.get("papas")
        usuario = data.get("usuario_id")

        content = Milanga.query.get(id)
        content.pan = pan
        content.carne = carne
        content.ensalada = ensalada
        content.milanesa = milanesa
        content.papas = papas
        #content.usuario_id = usuario

        db.session.commit()

        dicc = jsonify({'id': content.id,
                        'pan': content.pan,
                        'carne': content.carne,
                        'ensalada': content.ensalada,
                        'milanesa': content.milanesa,
                        'papas': content.papas
                        #'fecha_creacion': content.fecha_creacion,
                        #'usuario_id': content.usuario_id
                        })
        #no se si devolver directamente el cambio, o el front se encarga de buscar el sandwich actualizado
        return dicc

        #return jsonify({'sandwich updated': {
        #                                        'id': content.id,
        #                                        'pan': content.tipo_pan,
        #                                        'carne': content.tipo_carne,
        #                                        'ensalada': content.tipo_ensalada,
        #                                        'milanesa': content.tipo_milanesa,
        #                                        'papas': content.tipo_papas
        #                                    }
        #                })


@app.route('/create', methods=['POST'])
def create_sandwich():
    try:
        data = request.json
        pan = data.get('pan')
        carne = data.get('carne')
        ensalada = data.get('ensalada')
        milanesa = data.get('milanesa')
        papas = data.get('papas')
        usuario_id = data.get('usuario_id')

        #capaz aca te olvidas, reestablecemos el valos de los registros del modelo, primero va 
        # el nombre de la columna del modelo, luego el valor de la variable
        nuevo_sandwich = Milanga(pan=pan, carne=carne, ensalada=ensalada, milanesa=milanesa, papas=papas, usuario_id=usuario_id)

        db.session.add(nuevo_sandwich)
        db.session.commit()
        #se devuelve un True
        return jsonify({'milanesas':
                        {
                            'id': nuevo_sandwich.id,
                            'pan': nuevo_sandwich.pan,
                            'carne' : nuevo_sandwich.carne,
                            'ensalada': nuevo_sandwich.ensalada,
                            'milanesa': nuevo_sandwich.milanesa,
                            'papas': nuevo_sandwich.papas
                            #'fecha_creacion': nuevo_sandwich.fecha_creacion
                            #'usuario_id': nuevo_sandwich.usuario_id
                            }
                        })
    except:
        return jsonify({'alert' : 'no se pudo crear un nuevo sandwich'})


@app.route('/user', methods=["GET"])
def create_user():
    try:
        data = request.json

        nombre = data.get('nombre')
        edad = data.get('edad')
        imagen = data.get('imagen')
        email = data.get('email')

        new_user = Usuario(nombre=nombre, edad=edad, imagen=imagen, email=email)

        db.session.add(new_user)
        db.session.commit()
        return jsonify({'succes': True})
    except:
        return jsonify({'succes': False})


@app.route('/invents', methods=['GET'])
def invents():
    return """<h1>invents milanga</h1>"""


if __name__ == '__main__':
    db.init_app(app)
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', debug=True, port=5000)
