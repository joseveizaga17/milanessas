from flask import Flask, request, jsonify
from flask_cors import CORS
from bd.app import db, Milanga, Usuario


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI']= 'postgresql+psycopg2://postgres:manu17@localhost:5432/milanesas'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False


@app.route('/', methods=["GET"])
def home():
    #try:
    #    return  
    #except:
    #    return 
    return """<h1>Welcome to how to create milanga</h1>"""


@app.route('/sandwichs/<id>', methods=['GET'])
def get_sandwich(id):
    data = Milanga.query.get(id)
    if data == None:
        return jsonify({'ALERT': 'no existe un sandwich con ese id'})
    else: 
        sandwich = {
            'id': id,
            'pan': data.tipo_pan,
            'carne': data.tipo_carne,
            'ensalada': data.tipo_ensalada,
            'milanesa': data.tipo_milanesa,
            'papas': data.tipo_papas
        }
        return jsonify({'sandwich': sandwich})


@app.route('/sandwichs', methods=['GET'])
def get_all_sandwich():
    try:
        data = Milanga.query.all()
        sandwichs_data = []
        for sandwich in data:
            sandwich_data = {
                "id": sandwich.id,
                "tipo_pan": sandwich.tipo_pan,
                "tipo_carne": sandwich.tipo_carne,
                "tipo_ensalada": sandwich.tipo_ensalada,
                "tipo_milanesa": sandwich.tipo_milanesa,
                "tipo_papas": sandwich.tipo_papas
                }
            sandwichs_data.append(sandwich_data)
        return jsonify({"sandwichs": sandwichs_data})
    except:
        return jsonify({'alert' : 'error al mostrar todos los sandwich'})
    

@app.route('/delete/<id>', methods=['DELETE'])
def delete_sandwich(id):
    identificador = id
    data = Milanga.query.get(identificador)
    if data == None:
        return jsonify({'ALERT': 'error al eliminar'})
    else :
        db.session.delete(data)
        db.session.commit()

        return jsonify({'resultado': True})


@app.route('/changes/<id>', methods=['PUT'])
def changes_sandwich(id):
    data = request.json

    if data == None:
        return jsonify({'ALERT': 'error al eliminar'})
    else :
        pan = data.get("tipo_pan")
        carne = data.get("tipo_carne")
        ensalada = data.get("tipo_ensalada")
        milanesa = data.get("tipo_milanesa")
        papas = data.get("tipo_papas")

        content = Milanga.query.get(id)
        content.tipo_pan = pan
        content.tipo_carne = carne
        content.tipo_ensalada = ensalada
        content.tipo_milanesa = milanesa
        content.tipo_papas = papas

        db.session.commit()
        return jsonify({'sandwich updated': {
                                                'id': content.id,
                                                'pan': content.tipo_pan,
                                                'carne': content.tipo_carne,
                                                'ensalada': content.tipo_ensalada,
                                                'milanesa': content.tipo_milanesa,
                                                'papas': content.tipo_papas
                                            }
                        })


@app.route('/create', methods=['POST'])
def create_sandwich():
    try:
        data = request.json
        pan = data.get('tipo_pan')
        carne = data.get('tipo_carne')
        ensalada = data.get('tipo_ensalada')
        milanesa = data.get('tipo_milanesa')
        papas = data.get('tipo_papas')

        nuevo_sandwich = Milanga(tipo_pan=pan, tipo_carne=carne, tipo_ensalada=ensalada, tipo_milanesa=milanesa, tipo_papas=papas)

        db.session.add(nuevo_sandwich)
        db.session.commit()
        return jsonify({'milanesas':
                        {
                            'id': nuevo_sandwich.id,
                            'pan': nuevo_sandwich.tipo_pan,
                            'carne' : nuevo_sandwich.tipo_carne,
                            'ensalada': nuevo_sandwich.tipo_ensalada,
                            'milanesa': nuevo_sandwich.tipo_milanesa,
                            'papas': nuevo_sandwich.tipo_papas
                            }
                        })
    except:
        return jsonify({'alert' : 'no se pudo crear un nuevo sandwich'})


@app.route('/invents', methods=['GET'])
def invents():
    return """<h1>invents milanga</h1>"""


if __name__ == '__main__':
    db.init_app(app)
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', debug=True, port=5000)
