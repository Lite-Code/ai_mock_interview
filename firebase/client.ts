
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC1vkLug_lNc8Xd-ERJy6nXLowIGI9i7s",
  authDomain: "prepwise-bc886.firebaseapp.com",
  projectId: "prepwise-bc886",
  storageBucket: "prepwise-bc886.firebasestorage.app",
  messagingSenderId: "664923695450",
  appId: "1:664923695450:web:17a204a31e3013b9ce2b63",
  measurementId: "G-D80X1FT4NR"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);