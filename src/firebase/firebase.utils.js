import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCTck1M7t0p_rprlKgMk06Iz6RInbFgtm8",
  authDomain: "crwn-db-3c3ac.firebaseapp.com",
  projectId: "crwn-db-3c3ac",
  storageBucket: "crwn-db-3c3ac.appspot.com",
  messagingSenderId: "606653636799",
  appId: "1:606653636799:web:e1182dde3740a97c00a60a",
  measurementId: "G-2MVNMGTQWK"
};

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase