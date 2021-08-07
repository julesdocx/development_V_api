const firebase = require('../firebase');
const helpers = require('../utils/helpers');
const db = firebase.firestoreDb;

// post user with {user}:body
const postUser = async (req, res) => {
    const user = req.body.user;
    try {
        const collectionRef = db.collection('users')
        const snapshot = await collectionRef.where('username', '==', user.username).get();
        if (!snapshot.empty) {
            res.status(403).send(`The username, ${user.username}, already exists`);
        } else {
            const {id} = await collectionRef.add({
              username: user.username,
              email: user.email,
            }, { merge: true });
            res.status(200).send(id);
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

// delete user with :id
const deleteUser = async (req, res) => {
    const reqId = req.params.id
    try {
        const docRef = db.collection('users').doc(reqId);
        const doc = await docRef.get();
        const data = doc.data();
        const username = data.username;
        deleteUserActivities(username); // delete user activities
        const {id} = await db.collection('users').doc(reqId).delete();
        res.status(200).send(id);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}
/**
 * @param  username
 * @return [activities]
 */
const deleteUserActivities = async (username) => {
    console.log(username);
    try {
        const collectionRef = db.collection('activities');
        const snapshot = await collectionRef.where('username', '==', username).get().then( (querySnapshot) => {
            querySnapshot.forEach( (doc)=> {
                doc.ref.delete();
            })
        })
    } catch (err) {
        console.log(err);
        return err;
    }
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