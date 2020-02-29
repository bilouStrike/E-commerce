import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAZVTWGY-SL4ZImdramiOeMDr-lhnVD89Q",
    authDomain: "e-commerce-50731.firebaseapp.com",
    databaseURL: "https://e-commerce-50731.firebaseio.com",
    projectId: "e-commerce-50731",
    storageBucket: "e-commerce-50731.appspot.com",
    messagingSenderId: "616394675615",
    appId: "1:616394675615:web:a23720229241c453bf19aa"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot =  await userRef.get();
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Failed to add sve user',  error.message)
        }
    }
    console.log(snapshot);
    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;