import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAN2vKMKRwBVhiUENb-PB_Xxl-L_Y3q0cI",
  authDomain: "crwn-db-9e2fb.firebaseapp.com",
  databaseURL: "https://crwn-db-9e2fb.firebaseio.com",
  projectId: "crwn-db-9e2fb",
  storageBucket: "crwn-db-9e2fb.appspot.com",
  messagingSenderId: "198365125554",
  appId: "1:198365125554:web:af6638ab4ff75fb835e2ab",
  measurementId: "G-3L0W5C2141"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exits) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;