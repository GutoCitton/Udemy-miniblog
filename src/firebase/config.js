import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyA5NBJkRhfjPx0TXzw0AqxggYWzS15RRMM",
  authDomain: "miniblog2-fdce0.firebaseapp.com",
  projectId: "miniblog2-fdce0",
  storageBucket: "miniblog2-fdce0.appspot.com",
  messagingSenderId: "733609368887",
  appId: "1:733609368887:web:d4735fa179de4344a8ceb2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
