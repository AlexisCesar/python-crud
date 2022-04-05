# Python CRUD - API and Website

Very simple CRUD just for python study purposes. The goal was to develop the API as the backend of a website with Python3, the frontend goal was to consume this API.

## Dependencies
To install project dependencies (in root folder):
```bash
pip3 install -r 'requirements.txt'
```

## Database initialization
For this you'll need Docker. Then, in 'api' folder:
```bash
docker-compose up
```

## Running
Frontend (in 'web' folder):
```bash
python ./manage.py runserver
```
Backend (in 'api' folder):
```bash
uvicorn main:app --port 5566
```
