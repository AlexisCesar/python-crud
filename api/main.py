from contact_repository import ContactRepository
from flask import *
import json

app = Flask(__name__)

@app.route('/me/contacts', methods=['GET'])
def contacts():
    contacts = ContactRepository().findAll()
    json_dump = json.dumps(contacts)

    return json_dump

if __name__ == '__main__':
    app.run(port=5566)