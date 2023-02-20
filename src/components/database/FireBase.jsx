import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';

const API_KEY = "AIzaSyBEUBgLAMVCeFcx90Ty3WAztJKTia_z3vQ"
const APP_ID = "1:1065349031236:web:81cca4f57961efc026a311"

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "salarydb-8f14b.firebaseapp.com",
    databaseURL: "https://salarydb-8f14b-default-rtdb.firebaseio.com",
    projectId: "salarydb-8f14b",
    storageBucket: "salarydb-8f14b.appspot.com",
    messagingSenderId: "1065349031236",
    appId: APP_ID
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);