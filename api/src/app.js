const express = require('express');
const app = express();
const cors = require('cors');
const routExample = require('@routes/routexample');

app.use(cors());

app.use((req, res, next) => {

    res.set("Acess-Control-Allow-Origin", "*");
    res.set("Acess-Control-Allow-Methods", "GET,PUT,POST,DELETE,UPDATE");
    res.set("Acess-Control-Allow-Header", "Origin, X-Request-With, Content-Type, Accept");

    next();

});

app.use(express.json());

app.use(routExample);

app.use('*', (req, res) => {
    res.status(404).json({ err: 'rout does not exists'});
});

module.exports = app;
