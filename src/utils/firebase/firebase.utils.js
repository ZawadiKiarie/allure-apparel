import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,//get data inside the doc instance
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCL9tnOKtUQxs_-aGzy3GMtigjmJmuC40s",
  authDomain: "allure-apparel-db.firebaseapp.com",
  projectId: "allure-apparel-db",
  storageBucket: "allure-apparel-db.firebasestorage.app",
  messagingSenderId: "83010855894",
  appId: "1:83010855894:web:f0ce03eb87378de2e6ba77"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();//you can have mutliple providers, maybe for different signInWith...

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();//you should only have one auth for one app
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  // 1. check if user data exists
  // if it does, return userDockRef
  // if user data not exist, create/set doc with data from userAuth in my collection using userSnapshot

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    }catch(error){
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async() => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)