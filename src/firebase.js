import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: REACT_APP_FIREBASE_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECT,
    storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER,
    appId: REACT_APP_FIREBASE_APP_ID
})

export const app = app.auth();
export default app;