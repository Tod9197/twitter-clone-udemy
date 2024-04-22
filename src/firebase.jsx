import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACpA9lFQV5AO5b-M_3G-JGN92LJXIpxMs",
  authDomain: "twitter-clone-udemy-f1d23.firebaseapp.com",
  projectId: "twitter-clone-udemy-f1d23",
  storageBucket: "twitter-clone-udemy-f1d23.appspot.com",
  messagingSenderId: "258827530794",
  appId: "1:258827530794:web:0d4756a867c333c5ad8953",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
