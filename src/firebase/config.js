// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyC_VfBp__w2XRYuYXCMMDpJ0FG9ay1xl6w",
//   authDomain: "miniblog-c0122.firebaseapp.com",
//   projectId: "miniblog-c0122",
//   storageBucket: "miniblog-c0122.appspot.com",
//   messagingSenderId: "129151468946",
//   appId: "1:129151468946:web:c594375b99fa88d97b2d4b"
// };

// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// export { db };




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
