const firebase = require('../firebase');
const db = firebase.firestoreDb;

// post user with {user}:body
const postActivity = async (req, res) => {
    const activity = req.body.activity;
    try {
        await db.collection('activities').doc(activity.username).set({
            title: activity.title,
            date: activity.date,
            sport: activity.sport,
            duration: activity.duration,
            gpx: activity.gpx,
            username: activity.username,
            uuid: activity.uuid,
        }, { merge: true });
        res.status(200).send('successful post request');
    } catch (err) {
        console.log(err);
        res.send(err);
    }
    res.status(200).send();
}

// update user with :uuid
const updateActivity = async (req, res) => {
    const activity = req.body.activity;
    try {
        const docRef = db.collection('activities')
        const snapshot = await docRef.where('uuid', '==', activity.uid).get();
        if (snapshot.empty) {
            res.status(403).send(`The activity with title: ${activity.title} and uuid: ${activity.uuid}, doesn't exists`);
        } else {
            docRef.set({
                title: activity.title,
                date: activity.date,
                sport: activity.sport,
                duration: activity.duration,
                gpx: activity.gpx,
                username: activity.username,
            });
            res.status(200).send({message: 'successful update request', id: docRef.id});
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