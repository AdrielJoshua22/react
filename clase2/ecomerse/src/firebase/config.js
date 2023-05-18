// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbt9BL9ZugCqu1Li8m2uVOOHxuiyDeZXI",
  authDomain: "ecomersemunhodeco.firebaseapp.com",
  projectId: "ecomersemunhodeco",
  storageBucket: "ecomersemunhodeco.appspot.com",
  messagingSenderId: "135345008887",
  appId: "1:135345008887:web:06cbd100540556d6c1e3f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase= () => app