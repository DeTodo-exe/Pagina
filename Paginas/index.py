# flask_ngrok_example.py Una prueba nms
from flask import Flask, render_template
from flask_ngrok import run_with_ngrok

app = Flask(__name__)
run_with_ngrok(app)  # Start ngrok when app is run

@app.route("/")
def main():
    return render_template('main.html')

if __name__ == '__main__':
    app.run()