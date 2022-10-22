import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup, setPersistence, onAuthStateChanged} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAFyNfjzqVYwQV9FZhnyKqRXWTaZOSIHQ",
  authDomain: "quick-attend.firebaseapp.com",
  projectId: "quick-attend",
  storageBucket: "quick-attend.appspot.com",
  messagingSenderId: "486816776365",
  appId: "1:486816776365:web:0f5521f15ee1699cdbc624"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

// setPersistence(auth, "local");

// const signInWithGoogle = () => {
  
//   const res = signInWithPopup(auth, provider)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       const user = result.user;
//       return user
//     }).catch((error) => {
//       alert(error.message);
//       console.log(error);
//     });
//   return res;
// };

export {db};