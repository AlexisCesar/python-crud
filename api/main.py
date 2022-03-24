from flask import *
import json

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home_page():
    data_set = {
        'Page': 'Home', 
        'Message': 'Successfully loaded the Home page'
        }
    json_dump = json.dumps(data_set)

    return json_dump

@app.route('/me/contacts', methods=['GET'])
def home_page():
    data_set = {
        'Page': 'Home', 
        'Message': 'Contacts...'
        }
    json_dump = json.dumps(data_set)

    return json_dump

if __name__ == '__main__':
    app.run(port=5566)