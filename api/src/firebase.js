
const admin = require('firebase-admin');
const serviceAccount = require('../config/config.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firestoreDb = admin.firestore();

module.exports = {firestoreDb};

