import { firebase } from '@firebase/app';
import '@firebase/firestore'
import '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA4qHrCu1IMje4aGhdDhEbA_mbbSmAY2Hk",
    authDomain: "aied-16e47.firebaseapp.com",
    databaseUrl:"https://aied-16e47.firebaseio.com",
    projectId: "aied-16e47",
    storageBucket: "aied-16e47.appspot.com",
    messagingSenderId: "462948271270",
    appId: "1:462948271270:web:8401c6ff4bb4df9b3e2067"
};

firebase.initializeApp(firebaseConfig)

export default firebase.firestore();