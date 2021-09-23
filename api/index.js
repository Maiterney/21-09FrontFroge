require('dotenv').config();
require('module-alias/register');

global.__basedir = __dirname;

const http = require('http');
const port = process.env.PORT || 5000;

const app = require('./src/app');

const server = http.createServer(app);

server.listen(port, () => {
    //console.log(e);
    console.log(`Servidor online -----> http://localhost:${port}`);
});
