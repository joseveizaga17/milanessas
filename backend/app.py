from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from bd.app import db, Milanga, Usuario, Sandwich


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
            'milanesa': data.milanesa,
            'ensalada': data.ensalada,
            'coccion': data.coccion,
            'papas': data.papas,
            'fecha_creacion': data.fecha_creacion,
            'usuario_id': data.usuario_id
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
                "tipo_milanesa": sandwich.milanesa,
                "tipo_ensalada": sandwich.ensalada,
                "tipo_coccion": sandwich.coccion,
                "tipo_papas": sandwich.papas,
                'fecha_creacion': data.fecha_creacion,
                'usuario_id': data.usuario_id
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
        milanesa = data.get("milanesa")
        ensalada = data.get("ensalada")
        coccion = data.get("coccion")
        papas = data.get("papas")
        usuario = data.get("usuario_id")

        content = Milanga.query.get(id)
        content.pan = pan
        content.milanesa = milanesa
        content.ensalada = ensalada
        content.coccion = coccion
        content.papas = papas
        content.usuario_id = usuario

        db.session.commit()

        dicc = jsonify({'id': content.id,
                        'pan': content.pan,
                        'milanesa': content.milanesa,
                        'ensalada': content.ensalada,
                        'coccion': content.coccion,
                        'papas': content.papas,
                        'fecha_creacion': content.fecha_creacion,
                        'usuario_id': content.usuario_id
                        })
        #no se si devolver directamente el cambio, o el front se encarga de buscar el sandwich actualizado
        return dicc

@app.route('/create', methods=['POST'])
def create_sandwich():
    try:
        data = request.json
        pan = data.get('pan')
        milanesa = data.get('milanesa')
        ensalada = data.get('ensalada')
        coccion = data.get('coccion')
        papas = data.get('papas')
        usuario_id = data.get('usuario_id')

        #capaz aca te olvidas, reestablecemos el valos de los registros del modelo, primero va 
        # el nombre de la columna del modelo, luego el valor de la variable
        nuevo_sandwich = Milanga(pan=pan, milanesa=milanesa, ensalada=ensalada, coccion=coccion, papas=papas, usuario_id=usuario_id)

        db.session.add(nuevo_sandwich)
        db.session.commit()
        #se devuelve un True
        return jsonify({'sandwich':
                        {
                            'id': nuevo_sandwich.id,
                            'pan': nuevo_sandwich.pan,
                            'milanesa' : nuevo_sandwich.milanesa,
                            'ensalada': nuevo_sandwich.ensalada,
                            'coccion': nuevo_sandwich.coccion,
                            'papas': nuevo_sandwich.papas,
                            'fecha_creacion': nuevo_sandwich.fecha_creacion,
                            'usuario_id': nuevo_sandwich.usuario_id
                            }
                        })
    except:
        return jsonify({'alert' : 'no se pudo crear un nuevo sandwich'})


@app.route('/invent', methods=['GET', 'POST'])
def invent():
    if request.method == 'GET':
        return render_template('invent.html')
    if request.method == 'POST':
        try:
            data = request.json
            pan = data.get('tipo_pan')
            milanesa = data.get('tipo_milanesa')
            ensalada = data.get('tipo_ensalada')
            coccion = data.get('tipo_coccion')
            papas = data.get('tipo_papas')

            nuevo_sandwich = Sandwich(tipo_pan=pan, tipo_milanesa=milanesa, tipo_coccion=coccion, tipo_ensalada=ensalada, tipo_papas=papas)

            db.session.add(nuevo_sandwich)
            db.session.commit()
            return jsonify({'sandwichs':
                            {
                                'id': nuevo_sandwich.id,
                                'pan': nuevo_sandwich.tipo_pan,
                                'milanesa': nuevo_sandwich.tipo_milanesa,
                                'coccion' : nuevo_sandwich.tipo_coccion,
                                'ensalada': nuevo_sandwich.tipo_ensalada,
                                'papas': nuevo_sandwich.tipo_papas
                                }
                            })
        except:
            return jsonify({'alert' : 'No te pudiste armar el Sandwich'})
        
@app.route('/user', methods=['POST'])
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
        return jsonify({'succes': True})
    except:
        return jsonify({'succes': 'fallo todddd'})
    

if __name__ == '__main__':
    db.init_app(app)
    with app.app_context():
        db.create_all()
    app.run(host='127.0.0.1', debug=True, port=5000)