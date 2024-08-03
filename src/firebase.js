import { initializeApp } from "firebase/app";

//firebaseの初期設定:この記述により、firebeseと接続することができる
const firebaseConfig = {
  apiKey: "AIzaSyCZrbJbJTYZWXIo31uN9QCsnThpDsIktLw",
  authDomain: "twitter-app-9ad40.firebaseapp.com",
  projectId: "twitter-app-9ad40",
  storageBucket: "twitter-app-9ad40.appspot.com",
  messagingSenderId: "890991818502",
  appId: "1:890991818502:web:7818100f57f207ab761087",
};

const app = initializeApp(firebaseConfig);
