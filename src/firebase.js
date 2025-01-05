import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATqCxspM0tzlKGpMVuR6g3xUwrCXH-pQQ",
  authDomain: "mrdorker-2eea9.firebaseapp.com",
  projectId: "mrdorker-2eea9",
  storageBucket: "mrdorker-2eea9.firebasestorage.app",
  messagingSenderId: "121332264390",
  appId: "1:121332264390:web:9c98d307669820ec0016c7",
  measurementId: "G-73S6L7DGEN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    console.log('User ' , user);
    return user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const githubProvider = new GithubAuthProvider();
const signInWithGithub = async () => {
  try {
    const res = await signInWithPopup(auth, githubProvider);
    const user = res.user;
    console.log(user);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  console.log('Here', auth);
  signOut(auth);
};

export { app, auth, db, signInWithGoogle, signInWithGithub, logout };
