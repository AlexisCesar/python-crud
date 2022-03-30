CREATE DATABASE PythonCrud;
GO

USE PythonCrud;
GO

CREATE TABLE Contact (
    Id UNIQUEIDENTIFIER PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Email VARCHAR(255),
    BirthDate DATE,
    Blocked BIT NOT NULL
);
GO

INSERT INTO Contact(Id, FirstName, LastName, Email, BirthDate, Blocked)
VALUES('f6c70d03-f7ac-41c4-9673-0ace6b7e8a1b', 'Craig', 'Crocker', 'Craig@Crocker.com', CAST('2000-05-10' AS DATE), 0);
INSERT INTO Contact(Id, FirstName, LastName, Email, BirthDate,Blocked)
VALUES(NEWID(), 'Robert', 'McGuire', 'Robert@McGuire.com', CAST('2002-08-04' AS DATE), 1);
INSERT INTO Contact(Id, FirstName, LastName, Email, BirthDate,Blocked)
VALUES(NEWID(), 'Karrie', 'Park', 'Karrie@Park.com', CAST('1995-10-25' AS DATE), 0);
GO