const firebase = require('../firebase');
const db = firebase.firestoreDb;

// post user with {user}:body
const postUser = async (req, res) => {
    const user = req.body.user;
    try {
        const docRef = db.collection('users')
        const snapshot = await docRef.where('username', '==', user.username).get();
        if (!snapshot.empty) {
            res.status(403).send(`The username, ${user.username}, already exists`);
        } else {
            docRef.add({
              username: user.username,
              email: user.email,
            }, { merge: true });
            res.status(200).send('successful registration');
        }
    } catch (err) {
        console.log(err);
        res.send(err);
    }
    res.status(200).send();
}

// update user with :uuid
const updateUser = async (req, res) => {
    res.status(200).send('user updated');
}

// delete user with :uuid
const deleteUser = async (req, res) => {
    res.status(200).send('user deleted');
}

// get (all) users
const getUsers = async (req, res) => {
    try {
        const docRef = db.collection('users')
        const snapshot = await docRef.get()
        res.status(200).send(snapshot.docs.map(doc => doc.data()));
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

module.exports = {
    postUser,
    updateUser,
    deleteUser,
    getUsers,
}