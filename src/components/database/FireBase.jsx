import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
//require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "salarydb-8f14b.firebaseapp.com",
    databaseURL: "https://salarydb-8f14b-default-rtdb.firebaseio.com",
    projectId: "salarydb-8f14b",
    storageBucket: "salarydb-8f14b.appspot.com",
    messagingSenderId: "1065349031236",
    appId: process.env.APP_ID
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);