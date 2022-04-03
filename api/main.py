from contact_repository import ContactRepository
from typing import Optional
from fastapi import FastAPI, status, HTTPException
from model.Contact import Contact
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import re

uuid_re = re.compile("^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=5566)


@app.post("/me/contacts", status_code=status.HTTP_201_CREATED)
def insert_contact(contact: Contact):
    repo = ContactRepository()
    repo.insert(contact)
    return ""


@app.get("/me/contacts", status_code=status.HTTP_200_OK)
def get_all():
    repo = ContactRepository()
    contacts = repo.findAll()
    return contacts


@app.get("/me/contacts/contact", status_code=status.HTTP_200_OK)
def get_by_id(id: Optional[str] = None):
    if id == None or not uuid_re.match(id):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Invalid id.')
    repo = ContactRepository()
    contact = repo.findById(id)
    if contact == None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Contact not found.')
    return contact


@app.delete("/me/contacts/contact", status_code=status.HTTP_204_NO_CONTENT)
def delete(id: Optional[str] = None):
    if id == None or not uuid_re.match(id):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Invalid id.')
    repo = ContactRepository()
    affectedRows = repo.delete(id)
    if affectedRows == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Contact not found.')
    return ""


@app.put("/me/contacts/contact", status_code=status.HTTP_204_NO_CONTENT)
def update(contact: Contact, id: Optional[str] = None):
    if id == None or not uuid_re.match(id):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Invalid id.')
    repo = ContactRepository()
    affectedRows = repo.update(id, contact)
    if affectedRows == 0:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Contact not found.')
    return ""
