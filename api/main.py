from flask import *
import json, time

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home_page():
    data_set = {
        'Page': 'Home', 
        'Message': 'Successfully loaded the Home page',
        'Timestramp': time.time()
        }
    json_dump = json.dumps(data_set)

    return json_dump

@app.route('/hello', methods=['GET'])
def hello_page():
    user_query = str(request.args.get('user')) # /hello?user=USER_NAME

    data_set = {
        'Page': 'Hello', 
        'Message': f'Successfully got the request for {user_query}',
        'Timestramp': time.time()
        }
    json_dump = json.dumps(data_set)

    return json_dump

if __name__ == '__main__':
    app.run(port=5566)