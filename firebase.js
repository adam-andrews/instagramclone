// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyArevUSRGhznwSXY4l6draWtJ9xkFjaQMw',
	authDomain: 'instagram-67348.firebaseapp.com',
	projectId: 'instagram-67348',
	storageBucket: 'instagram-67348.appspot.com',
	messagingSenderId: '410451822408',
	appId: '1:410451822408:web:6fafe1d85f56d1cf8f557d',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export{app, db, storage};