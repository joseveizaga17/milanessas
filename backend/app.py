from flask import Flask, jsonify
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

@app.route('/create', methods=['POST'])
def create_sandwich():
    try:
        content = request.json
        pan = content.get('tipo_pan')
        carne = content.get('tipo_carne')
        ensalada = content.get('tipo_ensalada')
        milanesa = content.get('tipo_milanesa')
        papas = content.get('tipo_papas')

        nuevo_sandwich = Milanga(tipo_pan=pan, tipo_carne=carne, tipo_ensalada=ensalada, tipo_milanesa=milanesa, tipo_papas=papas)

        db.session.add(nuevo_sandwich)
        db.session.commit()
        return jsonify({'milanesas':{'id': nuevo_sandwich.id, 'pan': nuevo_sandwich.pan,'carne' : nuevo_sandwich.carne}, 'ensalada' : nuevo_sandwich.ensalada, 'milanesa' : nuevo_sandwich.milanesa, 'papas' : nuevo_sandwich.papas}); print(type(db))
    except:
        return
    #jsonify({'alert' : 'no se pudo crear un nuevo sandwich'})
    
    #return """<h2>como crear tu propia milanga paso por paso</h2>"""
@app.route('/invents', methods=['GET'])
def invents():
    return """<h1>invents milanga</h1>"""

if __name__ == '__main__':
    db.init_app(app)
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', debug=True, port=5000)
