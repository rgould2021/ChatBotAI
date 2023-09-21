# Required Imports
import datetime
import os
import threading
from flask import Flask, request, jsonify
from firebase_admin import credentials, firestore, initialize_app

from google.api_core.client_options import ClientOptions
from google.cloud import firestore
from google.cloud.firestore_v1.base_query import FieldFilter

# Initialize Flask App
app = Flask(__name__)

# Initialize Firestore DB
cred = credentials.Certificate('chatbot.json')
default_app = initialize_app(cred)
db = firestore.Client()
collection_name = 'Chatbot History'
collection = db.collection(collection_name)


@app.route('/', methods=['GET'])
def root():
    return 'hello world'

# Add a new endpoint to add data to Firestore
@app.route('/add_data', methods=['POST'])
def add_data():
    try:
        # Parse the JSON data from the request
        data = request.json

        # Add a new document to the 'chat' collection with the parsed data
        new_doc_ref, _ = collection.add(data)

        # Return a success response with the ID of the newly created document
        response = {
            'message': 'Data added successfully',
            'document_id': new_doc_ref.id
        }

        return jsonify(response), 200
    except Exception as e:
        # Handle any errors that occur during data insertion
        response = {
            'error': str(e)
        }
        return jsonify(response), 500

@app.route('/login', methods=['POST'])
def login():
    pass

port = int(os.environ.get('PORT', 8080))

if __name__ == '__main__':
    app.run(threaded=True, host='0.0.0.0', port=port, debug=True)
