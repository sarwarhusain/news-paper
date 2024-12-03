// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArzmR667ZK_IkMvSZZSNvs9BpkqUAgLFI",
    authDomain: "news-portal-42cf4.firebaseapp.com",
    projectId: "news-portal-42cf4",
    storageBucket: "news-portal-42cf4.firebasestorage.app",
    messagingSenderId: "647884566527",
    appId: "1:647884566527:web:4a2b332273830a9b6f01ca",
    measurementId: "G-X9DL2NM889"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth()
