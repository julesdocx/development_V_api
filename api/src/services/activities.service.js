const firebase = require('../firebase');
const db = firebase.firestoreDb;

// post user with {user}:body
const postActivity = async (req, res) => {
    const activity = req.body.activity;
    try {
        const { id } = await db.collection('activities').add({
            title: activity.title,
            date: activity.date,
            sport: activity.sport,
            duration: activity.duration,
            username: activity.username,
        }, { merge: true });
        db.collection('activities').doc(id).set({id: id})
        res.status(200).send(id);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
    res.status(200).send();
}

// update user with :id
const updateActivity = async (req, res) => {
    const activity = req.body.activity;
    try {
        const docRef = db.collection('activities')
        const snapshot = await docRef.where('id', '==', activity.id).get();
        if (snapshot.empty) {
            res.status(403).send(`The activity with title: ${activity.title} and uuid: ${activity.id}, doesn't exists`);
        } else {
            const {id} = docRef.set({
                title: activity.title,
                date: activity.date,
                sport: activity.sport,
                duration: activity.duration,
                username: activity.username,
            });
            res.status(200).send(id);
        }
    } catch (err) {
        console.log(err);
        res.send(err);
    }
    res.status(200).send();
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