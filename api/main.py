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

if __name__ == '__main__':
    app.run(port=5566)