import flask from Flask


app = Flask(__name__)

@app.route('/', methods=["GET"])
def entry():
    return """
    <h1>Welcome to how to create milanga</h1>
    """
           
