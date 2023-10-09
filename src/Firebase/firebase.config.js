// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAr2dqYqqWM6ALW7ooURXvyfDFfKE0bQI",
    authDomain: "social-event-a732f.firebaseapp.com",
    projectId: "social-event-a732f",
    storageBucket: "social-event-a732f.appspot.com",
    messagingSenderId: "452022801807",
    appId: "1:452022801807:web:cfccc8762d9db718df67fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
