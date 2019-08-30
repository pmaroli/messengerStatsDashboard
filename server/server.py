from flask import Flask

from zucc import parseMessages

app = Flask(__name__)

@app.route('/getLikes')
def function():
  return parseMessages('messages.json')