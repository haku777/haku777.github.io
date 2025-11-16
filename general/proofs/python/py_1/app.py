from flask import Flask, render_template, request, jsonify

app = Flask(__name__, template_folder='.')

@app.route("/")
def home():
    return render_template("py_1.html")

@app.route("/api/saludo", methods=["GET"])
def saludo():
    nombre = request.args.get("nombre", "mundo")
    return jsonify({"mensaje": f"Hola {nombre} desde Python!"})

if __name__ == "__main__":
    app.run(debug=True)