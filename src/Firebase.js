import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBavk9eKByXKCYTSgkfuZJoSOja8SGLm5c",
    authDomain: "crypto-web-cc58e.firebaseapp.com",
    projectId: "crypto-web-cc58e",
    storageBucket: "crypto-web-cc58e.appspot.com",
    messagingSenderId: "673301931654",
    appId: "1:673301931654:web:50b776b7b2fdfe9a54d307"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };