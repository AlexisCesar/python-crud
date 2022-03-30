const express = require('express');
const app = express();
const hostname = 'localhost';
const port = 3000;

const path = require('path');
const basePath = path.join(__dirname, 'public');

app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.get('/contacts', (req, res) => {
    res.sendFile(`${basePath}/contacts.html`);
});

app.get('/contacts/add', (req, res) => {
    res.sendFile(`${basePath}/add-contact.html`);
});

app.get('/contacts/update', (req, res) => {
    res.sendFile(`${basePath}/update-contact.html`);
});
