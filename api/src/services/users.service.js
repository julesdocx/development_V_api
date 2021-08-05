
// post user with {user}:body
const postUser = async (req, res) => {
    const user = req.body;
    try {
        const docRef = db.collection('users').add(user)
        const snapshot = await docRef.where('username', '==', user.username).get()
        if (!snapshot.empty) {
            res.status(403).send(`The username, ${user.username}, already exists`)
        } else {
            userDocumentRef.add({
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
    res.status(200).send('All users ...');
}

module.exports ={
    postUser,
    updateUser,
    deleteUser,
    getUsers,
}