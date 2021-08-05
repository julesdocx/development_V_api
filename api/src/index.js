const express = require('express')
const bodyParser = require('body-parser');
const http = require('http');
const Helpers = require('./utils/helpers.js')
const apiRoutes = require('./routes/api');
// Required for side-effects
require("firebase/firestore");

const admin = require('firebase-admin');
const serviceAccount = require('../config/config.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

const port = 5000

const app = express();
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

/**
 * @param '/postuser'
 * @param body: {user}
 */

// app.post('/postuser', async (req, res) => {
//   const user = req.body;

//   await db.collection('users').add({
//     firstname: "Jules",
//     lastname: "Docx",
//   })
//   .then((docRef) => {
//       console.log("Document written with ID: ", docRef.id);
//   })
//   .catch((error) => {
//       console.error("Error adding document: ", error);
//   });

//   res.status(200).send();
// });


let server = http.Server(app);
server.listen(port, () => console.log(`API is running on localhost: ${port}`));

server.on('error', (error) => {
  console.log('httpServer error', error);
});

module.exports = app;