import firebase from "firebase/app";
import "firebase/auth";

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyARKiwmpY-XZE-ZXzcdC2O0GJkDQL9I9To",
  authDomain: "bento-chatroom.firebaseapp.com",
  databaseURL: "https://bento-chatroom.firebaseio.com",
  projectId: "bento-chatroom",
  storageBucket: "bento-chatroom.appspot.com",
  messagingSenderId: "19241326689",
  appId: "1:19241326689:web:ad76a796a38fa97f"
}

firebase.initializeApp(config);
