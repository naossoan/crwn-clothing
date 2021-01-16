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
  //Checks if a user is already signed in. If they aren't, quit the function. (if the userAuth object does not exist)
  if (!userAuth) return

  //create variable based on the Firebase uid of the signed in user.
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  //create snapshot based on userRef uid
  const snapShot = await userRef.get()

  //Check the 'exists' field of the user to see if they already exist. If they don't, create
  //variables displayName, email, createdAt
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    //SET the variables to the userRef which saves this user into the firestore database to the path above 'users/{uid}'
    try {
      await userRef.set({ //firestore uses .get .set .update and .delete for manipulating data.
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log(error.message, 'error creating user')
    }
  }
  //return the userRef object for further use elsewhere
  return userRef

}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)



export default firebase