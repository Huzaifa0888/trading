import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyChc2fdk4L-CO-ahOGyNlhn77yo-tavtNg",
    authDomain: "btcbotdb.firebaseapp.com",
    databaseURL: "https://btcbotdb-default-rtdb.firebaseio.com",
    projectId: "btcbotdb",
    storageBucket: "btcbotdb.appspot.com",
    messagingSenderId: "445780298621",
    appId: "1:445780298621:web:968c1c563e4996799d9a14",
    measurementId: "G-7ZFNJRTC7M"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);