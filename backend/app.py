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

@app.route('/sandwich')
def all_sandwich():
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
                            'pan': nuevo_sandwich.pan,
                            'carne' : nuevo_sandwich.carne,
                            'ensalada': nuevo_sandwich.ensalada,
                            'milanesa': nuevo_sandwich.milanesa,
                            'papas': nuevo_sandwich.papas
                            }
                        })
    except:
        return jsonify({'alert' : 'no se pudo crear un nuevo sandwich'})
    """
    data = request.json
    pan = data.get('tipo_pan')
    carne = data.get('tipo_carne')
    ensalada = data.get('tipo_ensalada')
    milanesa = data.get('tipo_milanesa')
    papas = data.get('tipo_papas')

    return jsonify({
                    'pan': pan,
                    'carne' : carne,
                    'ensalada': ensalada,
                    'milanesa': milanesa,
                    'papas': papas
                    })
    """
    """
        return jsonify({
                            'pan': pan,
                            'carne' : carne,
                            'ensalada': ensalada,
                            'milanesa': milanesa,
                            'papas': papas
                            })
    """
    
    #return """<h2>como crear tu propia milanga paso por paso</h2>"""
@app.route('/invents', methods=['GET'])
def invents():
    return """<h1>invents milanga</h1>"""

if __name__ == '__main__':
    db.init_app(app)
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', debug=True, port=5000)
