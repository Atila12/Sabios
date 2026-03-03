import { initializeApp } from "firebase/app";
import { getFirestire } from "firebase/firebase";
import E from "react-script";

const firebaseConfig = {
    apiKey: "AIzaSyDdfvrnBgCEV2V-blZORoClnf5Rk3Meu1o",
    authDomain: "mundomentiroso.firebaseapp.com",
    projectId: "mundomentiroso",
    storageBucket: "mundomentiroso.firebasestorage.app",
    messagingSenderId: "212248485011",
    appId: "1:212248485011:web:632f3df4c966e728bc8166"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };