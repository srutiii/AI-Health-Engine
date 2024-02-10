from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL


app = Flask(__name__)
CORS(app) 


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'helloAI'
 
mysql = MySQL(app)



@app.route('/login', methods=['POST'])
def login():

    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    print(email,password)


    return data

@app.route('/signup', methods=['POST'])
def signup():

    data = request.get_json()

    first_name = data.get('first_name')
    last_name = data.get('last_name')
    email = data.get('email')
    phone_number = data.get('phone_number')
    password = data.get('password')


    print(data)
    cursor = mysql.connection.cursor()
    cursor.execute("INSERT INTO signup VALUES (%s,%s,%s,%s,%s)",(first_name,last_name,email,phone_number,password))
    cursor.connection.commit()
    cursor.close()

    return jsonify({"success": True, "message": "Registration successful"})


if __name__ == '__main__':
    app.run()
