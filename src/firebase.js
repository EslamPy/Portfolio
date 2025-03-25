import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdOxlPTQpPt1iY8luK32K3kjbrdCACrgY",
  authDomain: "portfolio-project-7f00c.firebaseapp.com",
  projectId: "portfolio-project-7f00c",
  storageBucket: "portfolio-project-7f00c.firebasestorage.app",
  messagingSenderId: "338130528837",
  appId: "1:338130528837:web:b13a7cee63277ab1cf912c",
  measurementId: "G-YK8LZY12P5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
