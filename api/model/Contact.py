from pydantic import BaseModel

class Contact(BaseModel):
    FirstName: str
    LastName: str
    Email: str
    BirthDate: str
    Blocked: bool = False
