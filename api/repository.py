import pyodbc

conn = pyodbc.connect('Driver={SQL Server};'
                      'Server=localhost,1433;'
                      'Database=PythonCrud;'
                      'UID=sa;'
                      'PWD=Database!2022;')

cursor = conn.cursor()
cursor.execute('SELECT * FROM dbo.Contact;')

for i in cursor:
    print(i)