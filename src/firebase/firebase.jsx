import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDDABA0YWnkUc9fJb34Tl6wLH_sCwTfQ4",
  authDomain: "wishlist-62368.firebaseapp.com",
  projectId: "wishlist-62368",
  storageBucket: "wishlist-62368.firebasestorage.app",
  messagingSenderId: "401137027263",
  appId: "1:401137027263:web:62a8ddb523adf50a3e9e0a",
  measurementId: "G-SX5Z3ZQ1V8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
