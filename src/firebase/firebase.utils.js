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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log(userAuth)
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
        
      })
    } catch (error) {
      console.log(error.message, 'error creating user')
    }
  }

  return userRef

}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)



export default firebase