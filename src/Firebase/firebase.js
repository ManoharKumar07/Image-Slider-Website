
import { initializeApp } from "firebase/app";
// importing our databse from firebase
import {getFirestore,collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBoO83fkTjFn98O-6YeAJg7lDJHkslMLGc",
  authDomain: "image-slider-pro.firebaseapp.com",
  projectId: "image-slider-pro",
  storageBucket: "image-slider-pro.appspot.com",
  messagingSenderId: "840583687893",
  appId: "1:840583687893:web:961cdcbb0004d53eec3c5c"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// accessing our collection in the database
export const imageRef =collection(db,"images");
export default app;

