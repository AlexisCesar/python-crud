from unicodedata import name

from numpy import block


class Contact():

    def __init__(self, id, first_name, last_name, email, blocked):
        self.id = id
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.blocked = blocked