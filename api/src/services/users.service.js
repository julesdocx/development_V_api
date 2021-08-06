const firebase = require('../firebase');
const db = firebase.firestoreDb;

// post user with {user}:body
const postUser = async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    try {
        const docRef = db.collection('users')
        const snapshot = await docRef.where('username', '==', username).get();
        if (!snapshot.empty) {
            res.status(403).send(`The username, ${username}, already exists`);
        } else {
            docRef.add({
              username: username,
              email: email,
            }, { merge: true });
            res.status(200).send('successful registration');
        }
    } catch (err) {
        console.log(err); v
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
    res.status(200).send('All users ...');
}

module.exports = {
    postUser,
    updateUser,
    deleteUser,
    getUsers,
}