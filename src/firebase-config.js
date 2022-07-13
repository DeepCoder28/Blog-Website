// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvCmV7DCvvANXupFC0s_POhxeyLp5uVIY",
  authDomain: "blogproject-44285.firebaseapp.com",
  projectId: "blogproject-44285",
  storageBucket: "blogproject-44285.appspot.com",
  messagingSenderId: "490432610164",
  appId: "1:490432610164:web:d9abac4d38be0ae7e13621",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
