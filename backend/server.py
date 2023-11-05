
# app.py
# Required Imports
import os
import json
import pyrebase
from flask import Flask, request, jsonify
from firebase_admin import credentials, firestore, initialize_app, auth


# Initialize Flask App
app = Flask(__name__)


# Initialize Firestore DB
cred = credentials.Certificate('chatbot.json')
default_app = initialize_app(cred)
db = firestore.client()
history = db.collection('Chat History')

pb = pyrebase.initialize_app(json.load(open('firebase_sdk.json')))


@app.route('/add', methods=['POST'])
def create():
    """
        create() : Add document to Firestore collection with request body
        Ensure you pass a custom ID as part of json body in post request
        e.g. json={'id': '1', 'title': 'Write a blog post'}
    """
    try:
        id = request.json['id']
        history.document(id).set(request.json)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"


@app.route('/list', methods=['GET'])
def read():
    """
        read() : Fetches documents from Firestore collection as JSON
        chat : Return document that matches query ID
        all_chats : Return all documents
    """
    try:
        # Check if ID was passed to URL query
        history_id = request.args.get('id')    
        if history_id:
            chat = history.document(history_id).get()
            return jsonify(chat.to_dict()), 200
        else:
            all_chats = [doc.to_dict() for doc in history.stream()]
            return jsonify(all_chats), 200
    except Exception as e:
        return f"An Error Occured: {e}"


@app.route('/delete', methods=['GET', 'DELETE'])
def delete():
    """
        delete() : Delete a document from Firestore collection
    """
    try:
        # Check for ID in URL query
        history_id = request.args.get('id')
        history.document(history_id).delete()
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"

#Api route to sign up a new user
# @app.route('/api/signup')
# def signup():
#     email = request.form.get('email')
#     password = request.form.get('password')
#     if email is None or password is None:
#         return {'message': 'Error missing email or password'},400
#     try:
#         user = auth.create_user(
#                email=email,
#                password=password
#         )
#         return {'message': f'Successfully created user {user.uid}'},200
#     except:
#         return {'message': 'Error creating user'},400
        
@app.route('/api/signup', methods=['POST'])
def signup():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        
        if not email or not password:
            return {'message': 'Error: Missing email or password'}, 400
        
        user = auth.create_user(
            email=email,
            password=password
        )

        # You should add code here to create the user using email and password.
        # Ensure to handle any exceptions that might occur during user creation.

        return {'message': f'Successfully created user {user.uid}'}, 200
    except Exception as e:
        return {'message': f'Error creating user: {str(e)}'}, 400

#Api route to get a new token for a valid user

@app.route('/api/token', methods=['POST'])
def token():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    print(email)
    print(password)
    try:
        user = pb.auth().sign_in_with_email_and_password(email, password)
        jwt = user['idToken']
        return {'token': jwt}, 200
    except:
        return {'message': 'There was an error logging in'},400

def check_token(f):
    @wraps(f)
    def wrap(*args,**kwargs):
        if not request.headers.get('authorization'):
            return {'message': 'No token provided'},400
        try:
            user = auth.verify_id_token(request.headers['authorization'])
            request.user = user
        except:
            return {'message':'Invalid token provided.'},400
        return f(*args, **kwargs)
    return wrap
        


port = int(os.environ.get('PORT', 8080))

if __name__ == '__main__':
    app.run(threaded=True, host='0.0.0.0', port=port, debug=True)