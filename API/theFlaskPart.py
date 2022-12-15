from flask import Flask, render_template
from flask_socketio import SocketIO, emit
import json
# from engineio.async_drivers import gevent


app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins='*')


@socketio.on('test')
def handle_message():
    print("hello World")

if __name__ == '__main__':
    socketio.run(app)


