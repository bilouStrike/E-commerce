import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAZVTWGY-SL4ZImdramiOeMDr-lhnVD89Q",
    authDomain: "e-commerce-50731.firebaseapp.com",
    databaseURL: "https://e-commerce-50731.firebaseio.com",
    projectId: "e-commerce-50731",
    storageBucket: "e-commerce-50731.appspot.com",
    messagingSenderId: "616394675615",
    appId: "1:616394675615:web:db24ea553fd54621bf19aa"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
    //console.log(snapshot);
    return userRef;
}

export const addCollectionAndItems = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();

    objectToAdd.forEach( obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj )
    })
    return await batch.commit();
}
export const converCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map( doc => {
        const { title, items } = doc.data();
        return {
            routeName:encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollection.reduce((accumulator,collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});

}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
