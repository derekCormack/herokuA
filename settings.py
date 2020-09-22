import os

SQLALCHEMY_DATABASE_URI =  os.environ.get('postgres://ywlpicmiptrres:f142823196b7ee397d5ba35381b8ece85fd8717e025420f3f338a16466730b9b@ec2-23-23-36-227.compute-1.amazonaws.com:5432/ddmh0o5t51m950')
SECRET_KEY = os.environ.get('SECRET_KEY')
SQLALCHEMY_TRACK_MODIFICATIONS = False