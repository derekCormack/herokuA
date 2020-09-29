import openpyxl
from openpyxl import load_workbook
from data_xl import customer_call, invoice_call, itemsold_call, product_call, loopdahdata_call
from flask import (Flask, jsonify, render_template)
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://ywlpicmiptrres:f142823196b7ee397d5ba35381b8ece85fd8717e025420f3f338a16466730b9b@ec2-23-23-36-227.compute-1.amazonaws.com:5432/ddmh0o5t51m950'
CORS(app, supports_credentials=True)

db = SQLAlchemy(app)

# SECRET_KEY = os.environ.get('f243tg24hg4545')
# SQLALCHEMY_TRACK_MODIFICATIONS = False

# This link is what you need.
# https://flask-sqlalchemy.palletsprojects.com/en/2.x/quickstart/#a-minimal-application
# You can do it in a shell, or in a route; but you need to create models so that Python knows how to access you database queries.
# Gtg. See you soon!

class TestTable(db.Model):
       first_col = db.Column(db.Integer, primary_key=True)

@app.route('/dbtest')
def dbtest():

       return "Hello world!"

@app.route("/")
def home():
       return 'HOME endpoint / '

@app.route("/index")
def index():
       return'<h1>Heroku Deploy local test?<h1>'

# @app.route("/index/<string:number_id>")
# def numberprint(number_id)
#        return 'This is endpoint index number : ' +  number_id 

@app.route("/json/customer", methods = ['POST','GET'])
def jsoncustomer():
       data=customer_call()
       print(data)
       return jsonify(data), 200

@app.route("/json/invoice", methods = ['POST','GET'])
def jsoninvoice():
       data=invoice_call()
       print(data)
       return jsonify(data), 200

@app.route("/json/product", methods = ['POST','GET'])
def jsonproduct():
       data=product_call()
       print(data)
       return jsonify(data), 200
 
@app.route("/json/itemsold", methods = ['POST','GET'])
def jsonitemsold():
       data=itemsold_call()
       # print(data)
       return jsonify(data), 200

@app.route("/hello/<name>")
def hello2(name):
    return render_template("hello.html", name=name)

@app.route('/dump/customer')
def dumpcustomer():
     return render_template("dump.html", customer=customer_call())

@app.route('/dump/invoice')
def dumpinvoice():
       return render_template("dump.html", customer=invoice_call())

@app.route('/dump/itemsold')
def dumpitemsold():
       return render_template("dump.html", customer=itemsold_call())

@app.route('/dump/product')
def dumpproduct():
       return render_template("dump.html", customer=product_call())

@app.route('/loop/product')
def dumploopproduct():
       data = product_call()
       app.logger.debug(data)
       return render_template("loopproduct.html", products=data)

@app.route('/loop/itemsold')
def dumploopitemsold():
       data = itemsold_call()
       app.logger.debug(data)
       return render_template("loopitemsold.html", itemsold=data)

@app.route('/loop/customer')
def dumploopcustomer():
       data = customer_call()
       app.logger.debug(data)
       return render_template("loopcustomer.html", customer=data)

@app.route('/loop/invoice')
def dumploopinvoice():
       data = invoice_call()
       app.logger.debug(data)
       return render_template("loopinvoice.html", invoice=data)

if __name__ == '__main__':
              app.run(debug=True, use_reloader=True, host='0.0.0.0', port=5000)
# debug=False, use_reload=False, host='0.0.0.0', port=5000
# setup webhserver to "reverse proxy" to the Flask app
 





# if __name__ == '__main__':
# 	print("--- Starting", __file__)
# 	app.run(debug=False, use_reloader=False, host='0.0.0.0')



# def invoice_printer():
#       date=invoices[x]['date']
#       invoiced_customer_id=invoices[x]['customer_id']
#       customer_name=customers[invoiced_customer_id]['name']
#       customer_email=customers[invoiced_customer_id]['email']
#       overall_price=0
#       print(CGREEN + f"Customer report for _{customer_name}_ regarding invoice #_{x}_ on {date} "+ CEND )
#       for y in itemsold: 
#             if (itemsold[y]['invoice_id'])==x:
#                   product_dict=itemsold[y]['product_id']
#                   product_name=productlist[product_dict]['product_name']
#                   price=productlist[product_dict]['price']
#                   # print(itemsold[y]['product_id'])
#                   sold=itemsold[y]['quantity_sold']
#                   total_price=round(sold*price,2)
#                   overall_price+=total_price
#                   print(f"Product:  {product_name} Quantity:  {sold} Price per unit:  ${price} Total Price:  ${total_price} ")
#       print(CRED + f"Total invoice pricing is: ${round(overall_price,2)}"+ CEND)




    #if this is being executed then start flask, start in debug.