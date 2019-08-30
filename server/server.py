from flask import Flask, send_from_directory

from zucc import parseMessages

app = Flask(__name__, static_folder="../client/build/")

@app.route("/")
def serve():
  return send_from_directory(app.static_folder, 'index.html')

@app.route('/getLikes')
def function():
  return parseMessages('messages.json')

if __name__ == '__main__':
  app.run()
