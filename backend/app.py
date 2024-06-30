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

@app.route('/create', methods=['GET'])
def create():
    return """
    <h2>como crear tu propia milanga paso por paso</h2>
    """
@app.route('/invents', methods=['GET'])
def invents():
    return """<h1>invents milanga</h1>"""

if __name__ == '__main__':
    db.init_app(app)
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', debug=True, port=5000)
