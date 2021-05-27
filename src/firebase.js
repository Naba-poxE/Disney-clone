import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey            : 'AIzaSyA0lBsK8GwPj6uZ6zfXapCXWDT6VG6aRBQ',
	authDomain        : 'naba-expo-web-app.firebaseapp.com',
	databaseURL       : 'https://naba-expo-web-app.firebaseio.com',
	projectId         : 'naba-expo-web-app',
	storageBucket     : 'naba-expo-web-app.appspot.com',
	messagingSenderId : '611792286244',
	appId             : '1:611792286244:web:6da6e9b6708cbde167deb1',
	measurementId     : 'G-KCHQHSDLER'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
