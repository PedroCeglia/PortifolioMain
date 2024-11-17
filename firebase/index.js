// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig2 = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY_FIREBASE,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

export const firebaseConfig = {
  apiKey: "AIzaSyC4VwDergW6pHpGqbbK_H7Sk-8k8zEYVj0",
  authDomain: "portifolio-16fa8.firebaseapp.com",
  databaseURL: "https://portifolio-16fa8-default-rtdb.firebaseio.com",
  projectId: "portifolio-16fa8",
  storageBucket: "portifolio-16fa8.appspot.com",
  messagingSenderId: "428844026206",
  appId: "1:428844026206:web:a8d6cbe0c82023999e27cf",
  measurementId: "G-F1M0TRBYHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app)
export const auth = getAuth(app)