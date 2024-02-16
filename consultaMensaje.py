#Esta madre ya jala
from flask import Flask, jsonify

app = Flask(__name__)

informacion_variable = "Que chingue a su madre el Dani"

@app.route('/obtener_informacion', methods=['GET'])
def obtener_informacion():
    return jsonify({'informacion': informacion_variable})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
