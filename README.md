# Python CRUD - API and Website

Very simple CRUD just for python study purposes. The goal was to develop the API as the backend of a website with Python3, the frontend goal was to consume this API.

## Dependencies
To install frontend dependencies:
```bash
npm install
```
To install backend dependencies:
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
npm start
```
Backend (in 'api' folder):
```bash
uvicorn main:app --port 5566
```
