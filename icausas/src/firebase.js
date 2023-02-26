// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARzV25v2BnAPlbBmohPmDlFomXGjBRsdg",
  authDomain: "icausas.firebaseapp.com",
  projectId: "icausas",
  storageBucket: "icausas.appspot.com",
  messagingSenderId: "204258086829",
  appId: "1:204258086829:web:4ad60dde0debd87b43db24",
  measurementId: "G-DQ6HFH92PB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
