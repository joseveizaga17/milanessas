from flask import Flask, jsonify, request, send_file, render_template # type: ignore
from psycopg2 import connect, extras  # type: ignore 

app = Flask(__name__)

host = 'localhost'
database = 'postgres'
username = 'postgres'
password = '1234'
port = 5432

def get_db_connection():
    conn = connect(host=host, database=database, user=username, password=password, port=port)
    return conn

def create_tables():
    commands = (
        """
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY NOT NULL,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        """,
        """ CREATE TABLE IF NOT EXISTS sandwiches (
            id SERIAL PRIMARY KEY NOT NULL,
            pan VARCHAR(255) NOT NULL,
            milanesa VARCHAR(255) NOT NULL,
            coccion VARCHAR(255) NOT NULL,
            ensalada VARCHAR(255),
            papas VARCHAR(255),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """
    )
    conn = get_db_connection()
    cur = conn.cursor()
    for command in commands:
        cur.execute(command)
    conn.commit()
    cur.close()
    conn.close()


# CRUD Users
@app.get('/api/users')
def get_users():
    conn = get_db_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)
    cur.execute("SELECT * FROM users")
    users = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(users)
 
@app.post('/api/users')
def create_user():
    new_user = request.get_json()
    username = new_user['username']
    email = new_user['email']
    password = new_user['password']
    conn = get_db_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)
    cur.execute("INSERT INTO users (username, email, password) VALUES (%s, %s, %s) RETURNING *",
                (username, email, password))
    new_user = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    return jsonify(new_user)

@app.delete('/api/users/<id>')
def delete_user(id):
    conn = get_db_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)
    cur.execute("DELETE FROM users WHERE id = %s RETURNING *", (id,))
    user = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    if user is None:
        return jsonify({'message': 'User not found'}), 404
    return jsonify(user)

@app.put('/api/users/<id>')
def update_user(id):
    conn = get_db_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)
    new_user = request.get_json()
    username = new_user['username']
    email = new_user['email']
    password = new_user['password']
    cur.execute("UPDATE users SET username = %s, email = %s, password = %s WHERE id = %s RETURNING *",
                (username, email, password, id))
    updated_user = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    if updated_user is None:
        return jsonify({'message': 'User not found'}), 404
    return jsonify(updated_user)

@app.get('/api/users/<id>')
def get_user(id):
    conn = get_db_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)
    cur.execute("SELECT * FROM users WHERE id = %s", (id,))
    user = cur.fetchone()
    cur.close()
    conn.close()
    if user is None:
        return jsonify({'message': 'User not found'}), 404
    return jsonify(user)


# CRUD Sandwiches
@app.get('/api/sandwiches')
def get_sandwiches():
    conn = get_db_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)
    cur.execute("SELECT * FROM sandwiches")
    sandwiches = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(sandwiches)

@app.post('/api/sandwiches')
def create_sandwich():
    new_sandwich = request.get_json()
    pan = new_sandwich['pan']
    milanesa = new_sandwich['milanesa']
    coccion = new_sandwich['coccion']
    ensalada = new_sandwich['ensalada']
    papas = new_sandwich['papas']
    conn = get_db_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)
    cur.execute("INSERT INTO sandwiches (pan, milanesa, coccion, ensalada, papas) VALUES (%s, %s, %s, %s, %s) RETURNING *",
                (pan, milanesa, coccion, ensalada, papas))
    new_sandwich = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    return jsonify(new_sandwich)

@app.delete('/api/sandwiches/<id>')
def delete_sandwich(id):
    conn = get_db_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)
    cur.execute("DELETE FROM sandwiches WHERE id = %s RETURNING *", (id,))
    sandwich = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    if sandwich is None:
        return jsonify({'message': 'Sandwich not found'}), 404
    return jsonify(sandwich)

@app.put('/api/sandwiches/<id>')
def update_sandwich(id):
    conn = get_db_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)
    new_sandwich = request.get_json()
    pan = new_sandwich['pan']
    milanesa = new_sandwich['milanesa']
    coccion = new_sandwich['coccion']
    ensalada = new_sandwich['ensalada']
    papas = new_sandwich['papas']
    cur.execute("UPDATE sandwiches SET pan = %s, milanesa = %s, coccion = %s, ensalada = %s, papas = %s WHERE id = %s RETURNING *",
                (pan, milanesa, coccion, ensalada, papas, id))
    updated_sandwich = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    if updated_sandwich is None:
        return jsonify({'message': 'Sandwich not found'}), 404
    return jsonify(updated_sandwich)

@app.get('/api/sandwiches/<id>')
def get_sandwich(id):
    conn = get_db_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)
    cur.execute("SELECT * FROM sandwiches WHERE id = %s", (id))
    sandwich = cur.fetchone()
    cur.close()
    conn.close()
    if sandwich is None:
        return jsonify({'message': 'Sandwich not found'}), 404
    return jsonify(sandwich)

@app.get('/')
def home():
    return send_file('frontend/index.html')

@app.get('/frontend/create/create.html')
def create():
    return send_file('frontend/create/create.html')

if __name__ == '__main__':
    create_tables()
    app.run(debug=True)