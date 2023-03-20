// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJmn_lxIXMW4m_l5Q4VJTNdrM2SGzmDBk",
    authDomain: "ema-john-simple-hk.firebaseapp.com",
    projectId: "ema-john-simple-hk",
    storageBucket: "ema-john-simple-hk.appspot.com",
    messagingSenderId: "120216891597",
    appId: "1:120216891597:web:3080a947c95d61773e3984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
