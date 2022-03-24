CREATE DATABASE PythonCrud;
GO

USE PythonCrud;
GO

CREATE TABLE Contact (
    Id UNIQUEIDENTIFIER PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Email VARCHAR(255),
    Blocked BIT NOT NULL
);
GO

INSERT INTO Contact(Id, FirstName, LastName, Email, Blocked)
VALUES('f6c70d03-f7ac-41c4-9673-0ace6b7e8a1b', 'Example', 'Contact', 'example@example.com', 0);
GO