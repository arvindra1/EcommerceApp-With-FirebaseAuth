// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
<<<<<<< HEAD
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
=======
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 //enter your firebase configuration
<<<<<<< HEAD
 apiKey: "AIzaSyBmWIqqjp5DaPkNqAM48Yb1fVTvRoYfA0A",
 authDomain: "tracking-device-13ec6.firebaseapp.com",
 databaseURL: "https://tracking-device-13ec6-default-rtdb.asia-southeast1.firebasedatabase.app",
 projectId: "tracking-device-13ec6",
 storageBucket: "tracking-device-13ec6.appspot.com",
 messagingSenderId: "857588387128",
 appId: "1:857588387128:web:2bb9fc1c1fa949b1eb05cd",
 measurementId: "G-LEXE5TR6PL"
=======
 
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
<<<<<<< HEAD
export const auth= getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);
=======
export const analytics = getAnalytics(app);
export const auth= getAuth(app);
export const db=getFirestore(app);
>>>>>>> 6d347b541c099b35ae1fd135ce838a0abdc1fdfd
