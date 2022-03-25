from contact_repository import ContactRepository
from flask import *
import json

app = Flask(__name__)

@app.route('/me/contacts', methods=['GET', 'POST'])
def contacts():
    if request.method == 'GET':
        contacts = ContactRepository().findAll()
        
        json_dump = json.dumps(contacts)

        return json_dump

    elif request.method == 'POST':
        contacts = ContactRepository()

        req_body = request.get_json(force=True)
        contacts.insert(req_body['FirstName'], req_body['LastName'], req_body['Email'])

        return Response("", status=201, mimetype='application/json')

@app.route('/me/contacts/contact', methods=['GET'])
def contact():
    contact_id_query = str(request.args.get('id')) # endpoint: /me/contacts/contact?id=userIdGoesHere
    contact = ContactRepository().findById(contact_id_query)
    json_dump = json.dumps(contact)
    return json_dump

if __name__ == '__main__':
    app.run(port=5566)