import pyodbc
from model.Contact import Contact

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

    def insert(self, first_name, last_name, email, birth_date):
        self.__cursor.execute(f"INSERT INTO dbo.Contact(Id, FirstName, LastName, Email, BirthDate, Blocked) VALUES(NEWID(), \'{first_name}\', \'{last_name}\', \'{email}\', \'{birth_date}\', 0);")
        self.__conn.commit()

    def findAll(self):
        self.__cursor.execute('SELECT * FROM dbo.Contact;')
        records = self.__cursor.fetchall()
        data = []
        column_names = [column[0] for column in self.__cursor.description]
        for rec in records:
            data.append(dict(zip(column_names, rec)))
        return data

    def findById(self, contactId):
        self.__cursor.execute(f'SELECT * FROM dbo.Contact WHERE Id = \'{contactId}\';')
        record = self.__cursor.fetchone()
        column_names = [column[0] for column in self.__cursor.description]
        return dict(zip(column_names, record))

    def update(self, contactId, first_name, last_name, email, birth_date, blocked):
        self.__cursor.execute(f'UPDATE dbo.Contact SET FirstName=\'{first_name}\', LastName=\'{last_name}\', Email=\'{email}\', BirthDate=\'{birth_date}\', Blocked=\'{blocked}\' WHERE Id = \'{contactId}\';')
        self.__conn.commit()

    def delete(self, contactId):
        self.__cursor.execute(f'DELETE FROM dbo.Contact WHERE Id = \'{contactId}\';')
        self.__conn.commit()