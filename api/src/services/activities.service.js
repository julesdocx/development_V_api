
// post user with {user}:body
const postActivity = async (req, res) => {
    const username = req.body.username;
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
const updateActivity = async (req, res) => {
}

// delete user with :uuid
const deleteActivity = async (req, res) => {
}

// get (all) users
const getActivities = async (req, res) => {

}

module.exports ={
    postActivity,
    updateActivity,
    deleteActivity,
    getActivities,
}