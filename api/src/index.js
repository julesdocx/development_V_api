const express = require('express')
const bodyParser = require('body-parser');
const http = require('http');
const Helpers = require('./utils/helpers.js')
const apiRoutes = require('./routes/api');

const port = 5000

const app = express();
app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: true}));
http.Server(app); 

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.status(200).send('hello world');
});

let server = http.Server(app);
server.listen(port, () => console.log(`API is running on localhost: ${port}`));

server.on('error', (error) => {
  console.log('httpServer error', error);
});

module.exports = app;