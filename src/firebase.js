import firebase from "firebase"
import app from "gatsby-plugin-firebase-v9.0"

require(`firebase/auth`)


if (!firebase.apps.length) {
  firebase.initializeApp(app);
}

export default firebase
