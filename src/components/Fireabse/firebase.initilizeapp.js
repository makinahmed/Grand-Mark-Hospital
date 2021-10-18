import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitilizeApp = () => initializeApp(firebaseConfig);


export default firebaseInitilizeApp;