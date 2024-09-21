// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1gfu79BrQ1WVMHKOL_iufxP5IpWajLZo",
  authDomain: "netflixgpt-e775e.firebaseapp.com",
  projectId: "netflixgpt-e775e",
  storageBucket: "netflixgpt-e775e.appspot.com",
  messagingSenderId: "94378200155",
  appId: "1:94378200155:web:d1fd2738027f601ba3037e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics =getAnalytics(app);

export const auth = getAuth();