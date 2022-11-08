// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    apiKey: "AIzaSyCMOb6C2CySvQqi0yftQ7QMuwbf_K7CR0U",
    authDomain: "wildography-b0b36.firebaseapp.com",
    projectId: "wildography-b0b36",
    storageBucket: "wildography-b0b36.appspot.com",
    messagingSenderId: "576272614430",
    appId: "1:576272614430:web:754db722630e5d5f841a0f"
};
// console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;