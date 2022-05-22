import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7F4xEMwzvei8wJwSb-iQWQ1cNGMHrSOs",
  authDomain: "happy-birthday-2f375.firebaseapp.com",
  projectId: "happy-birthday-2f375",
  storageBucket: "happy-birthday-2f375.appspot.com",
  messagingSenderId: "446897778159",
  appId: "1:446897778159:web:1782dadf6f185d61b15a1a"
};

initializeApp(firebaseConfig);
const db = getFirestore();

export { db }