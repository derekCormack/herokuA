from flask import render_template
from main import app, db

 
@app.route("/")
def home():
       return render_template('static/index.html') 

@app.route('/react')
def reactPage():
       return render_template('index.html', title="Home")

@app.route('/dbtest')
def dbtest():
       return  "hello @@@@@@@@@@@@"

@app.route("/index")
def index():
       return'<h1>Heroku SERVER deployment working<h1>'

@app.route('/db/json/customer')
def jsonfromdbcust():
       data = [x.toDict() for x in C.query.all()]
       return jsonify(data)

@app.route('/db/json/invoices')
def jsonfromdbinv():
       data = [x.toDict() for x in I.query.all()]
       return jsonify(data)

@app.route('/db/json/itemsold')
def jsonfromdbitem():
       data = [x.toDict() for x in IS.query.all()]
       return jsonify(data)

@app.route('/db/json/productlist')
def jsonfromdbprod():
       data = [x.toDict() for x in PR.query.all()]
       return jsonify(data)