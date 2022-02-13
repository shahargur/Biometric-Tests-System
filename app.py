import math
from flask_socketio import SocketIO, emit
from flask import Flask, send_from_directory
import base64
import cv2
from deepface import DeepFace
from Server.DBfunctions import UniversityDB


db_client = UniversityDB()
app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins='*')


# CORS(app) #comment this on deployment

@socketio.on('test')
def handle_message():
    print("hello World")


@socketio.on('loginAttempt')
def handle_message(loginDetails):
    result = db_client.is_valid_login(loginDetails['email'], loginDetails['password'])
    if (result):
        emit('login', {'result': "success", 'courseList': db_client.get_courses_list(loginDetails['email']),
                       'name': db_client.get_name(loginDetails['email']), 'email': loginDetails['email']})
    else:
        emit('login', {'result': "failure"})



@socketio.on('verification')
def handle_message(details):

    prob_string = details['image'][23:]
    gallery_string = db_client.get_img(details['email'])
    save_images(prob_string , gallery_string)
    result = face_varification('img1.jpeg', 'img2.jpeg')
    if (result['distance'] <= 0.35):
        emit('verificationres', {'result': "success"})

    else:
        emit('verificationres', {'result': "failure"})


if __name__ == '__main__':
    socketio.run(app)


def save_images(s1, s2):
    decodeit = open('img1.jpeg', 'wb')
    decodeit.write(base64.b64decode(s1))
    decodeit.close()
    decodesecond = open('img2.jpeg', 'wb')
    decodesecond.write(base64.b64decode(s2))
    decodesecond.close()

def face_varification( img1_path, img2_path ):
    img1 = cv2.imread('img1.jpeg')
    img2 = cv2.imread('img2.jpeg')
    model_name = "VGG-Face"
    model = DeepFace.build_model(model_name)
    try:
        result = DeepFace.verify(img1_path, img2_path)  # validate our images
        return result
    except ValueError:
        return {'verified': False, 'distance': math.inf}


