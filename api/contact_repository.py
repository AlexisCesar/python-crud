import pyodbc
from model.Contact import Contact
import re

class ContactRepository():

    def __init__(self) -> None:
        self.__cursor = self.__getConnectionCursor()

    def __getConnectionCursor(self):
        self.__conn = pyodbc.connect('Driver={SQL Server};'
                              'Server=localhost,1433;'
                              'Database=PythonCrud;'
                              'UID=sa;'
                              'PWD=Database!2022;')

        return self.__conn.cursor()

    def insert(self, contact: Contact):
        self.__cursor.execute("INSERT INTO dbo.Contact(Id, FirstName, LastName, Email, BirthDate, Blocked) VALUES(NEWID(), ?, ?, ?, ?, ?);", contact.FirstName, contact.LastName, contact.Email, contact.BirthDate, contact.Blocked)
        self.__conn.commit()

    def findAll(self):
        self.__cursor.execute('SELECT * FROM dbo.Contact ORDER BY FirstName;')
        records = self.__cursor.fetchall()
        data = []
        column_names = [column[0] for column in self.__cursor.description]
        for rec in records:
            data.append(dict(zip(column_names, rec)))
        return data

    def findById(self, contactId):
        self.__cursor.execute('SELECT * FROM dbo.Contact WHERE Id = ?;', contactId)
        record = self.__cursor.fetchone()

        if record == None:
            return None
        
        column_names = [column[0] for column in self.__cursor.description]
        return dict(zip(column_names, record))

    def update(self, contactId, contact: Contact):
        affectedRows = self.__cursor.execute('UPDATE dbo.Contact SET FirstName=?, LastName=?, Email=?, BirthDate=?, Blocked=? WHERE Id = ?;', contact.FirstName, contact.LastName, contact.Email, contact.BirthDate, contact.Blocked, contactId).rowcount
        self.__conn.commit()
        return affectedRows

    def delete(self, contactId):
        affectedRows = self.__cursor.execute('DELETE FROM dbo.Contact WHERE Id = ?;', contactId).rowcount
        self.__conn.commit()
        return affectedRows
