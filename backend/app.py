from flask import Flask


app = Flask(__name__)

@app.route('/', methods=["GET"])
def entry():
    return """
    <h1>Welcome to how to create milanga</h1>
    """
@app.route('/creates', methods=['GET'])
def create():
    return """
    <h2>como crear tu propia milanga paso por paso</h2>
    """
@app.route('/invents', methods=['GET'])
def invents():
    return """<h1>invents milanga</h1>"""
