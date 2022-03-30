from contact_repository import ContactRepository
from flask import *
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/me/contacts', methods=['GET', 'POST'])
def contacts():
    if request.method == 'GET':
        contacts = ContactRepository().findAll()
        
        json_dump = json.dumps(contacts)

        return Response(json_dump, status=200, mimetype='application/json')

    elif request.method == 'POST':
        contacts = ContactRepository()

        req_body = request.get_json(force=True)
        contacts.insert(req_body['FirstName'], req_body['LastName'], req_body['Email'], req_body['BirthDate'])

        return Response("", status=201, mimetype='application/json')

@app.route('/me/contacts/contact', methods=['GET', 'DELETE', 'PUT'])
def contact():
    if request.method == 'GET':
        contact_id_query = str(request.args.get('id'))

        contact = ContactRepository().findById(contact_id_query)
        
        json_dump = json.dumps(contact)

        return Response(json_dump, status=200, mimetype='application/json')

    elif request.method == 'DELETE':
        contact_id_query = str(request.args.get('id'))

        ContactRepository().delete(contact_id_query)
        
        return Response("", status=200, mimetype='application/json')
    
    elif request.method == 'PUT':
        contact_id_query = str(request.args.get('id'))
        
        req_body = request.get_json(force=True)
        ContactRepository().update(contact_id_query, req_body['FirstName'], req_body['LastName'], req_body['Email'], req_body['BirthDate'], req_body['Blocked'])

        return Response("", status=200, mimetype='application/json')

if __name__ == '__main__':
    app.run(port=5566)