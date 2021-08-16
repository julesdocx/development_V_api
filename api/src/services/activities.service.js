const firebase = require('../firebase');
const db = firebase.firestoreDb;

/**
 * @param  {activity}
 * @return id
 */
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
        db.collection('activities').doc(id).set({id: id}, { merge: true })
        res.status(200).send(id);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
    res.status(200).send();
}

/**
 * @param  {activity}
 * @return id
 */
const updateActivity = async (req, res) => {
    const activity = req.body.activity;
    try {
        const docRef = db.collection('activities')
        const snapshot = await docRef.where('id', '==', activity.id).get();
        if (snapshot.empty) {
            res.status(403).send(`The activity with title: ${activity.title} and id: ${activity.id}, doesn't exists`);
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

/**
 * @param  id
 * @return id
 */
const deleteActivity = async (req, res) => {
    const reqId = req.params.id
    try {
        const {id} = await db.collection('activities').doc(reqId).delete();
        res.status(200).send(id);
    } catch (err) {
        console.log(err)
        res.send(err);
    }
}

/**
 * @return [{activities}]
 */
const getActivities = async (req, res) => {
    try {
        const docRef = db.collection('activities')
        const snapshot = await docRef.get()
        res.status(200).send(snapshot.docs.map(doc => doc.data()));
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

module.exports ={
    postActivity,
    updateActivity,
    deleteActivity,
    getActivities,
}