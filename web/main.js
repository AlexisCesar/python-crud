const express = require('express');
const app = express();
const path = require('path');
const basePath = path.join(__dirname, 'public');
const hostname = 'localhost';
const port = 3000;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.get('/contacts', (req, res) => {
    res.sendFile(`${basePath}/contacts.html`);
});
