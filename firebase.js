// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwFf3ZSlOjekpRxyFECunE6958p517ikA",
  authDomain: "instagram-20-34984.firebaseapp.com",
  projectId: "instagram-20-34984",
  storageBucket: "instagram-20-34984.appspot.com",
  messagingSenderId: "218681151379",
  appId: "1:218681151379:web:a1fa0b35be8dd70a426266"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore()
export const storage = getStorage() 