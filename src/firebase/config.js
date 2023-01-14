import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC_VfBp__w2XRYuYXCMMDpJ0FG9ay1xl6w",
  authDomain: "miniblog-c0122.firebaseapp.com",
  projectId: "miniblog-c0122",
  storageBucket: "miniblog-c0122.appspot.com",
  messagingSenderId: "129151468946",
  appId: "1:129151468946:web:c594375b99fa88d97b2d4b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };