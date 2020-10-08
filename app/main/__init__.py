from flask import Flask
import main.views

app = Flask(__name__, static_folder='reactAPI/static')


# from flask import Flask

# app = Flask(__name__)

# import main.views