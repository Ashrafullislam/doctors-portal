// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3WDbvHE0etJdYoo4YEWNBtqD1J0hgVVI",
  authDomain: "doctors-portal-71ff8.firebaseapp.com",
  projectId: "doctors-portal-71ff8",
  storageBucket: "doctors-portal-71ff8.appspot.com",
  messagingSenderId: "747268944958",
  appId: "1:747268944958:web:a121f1fa68bceeca664d6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app  ;