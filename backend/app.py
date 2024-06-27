from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=["GET"])
def home():
    return """
    <h1>Welcome to how to create milanga</h1>
    """
@app.route('/create', methods=['GET'])
def create():
    return """
    <h2>como crear tu propia milanga paso por paso</h2>
    """
@app.route('/invents', methods=['GET'])
def invents():
    return """<h1>invents milanga</h1>"""
