import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDSOqkYQhPNXI4fUEcWmxyRcfgKUFf11Uk",
  authDomain: "learn-lingo-app-a2adc.firebaseapp.com",
  projectId: "learn-lingo-app-a2adc",
  storageBucket: "learn-lingo-app-a2adc.appspot.com",
  messagingSenderId: "864745389068",
  appId: "1:864745389068:web:1af9247af326f810194229",
  databaseURL:
    "https://learn-lingo-app-a2adc-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const database = getDatabase(app);

export { database };
