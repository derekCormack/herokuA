from flask import (Flask, jsonify, render_template)
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
# from config import Config

app = Flask(__name__, static_folder='app/main/static')

app.config.from_object(Config)
db = SQLAlchemy(app)
db.init_app(app)

from app import routes
