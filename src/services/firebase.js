import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCPWL-Woe9HLYDxSXmhNEL7ougLBL4aKlg",
    authDomain: "react-coder-3d68c.firebaseapp.com",
    projectId: "react-coder-3d68c",
    storageBucket: "react-coder-3d68c.appspot.com",
    messagingSenderId: "142373513377",
    appId: "1:142373513377:web:b89d54dd0d92eb8d1068e0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)