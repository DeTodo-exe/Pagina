from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def inicio():
    return render_template("main.html")

@app.route("/productos")
def productos():
    return render_template("productos.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/register")
def register():
    return render_template("register.html")

@app.route("/cart")
def cart():
    return render_template("cart.html")

@app.route("/billindetails")
def billindetails():
    return render_template("billindetails.html")

@app.route("/webpay")
def webpay():
    return render_template("webpay.html")

if __name__ == '__main__': 
    app.run(debug=True)

    