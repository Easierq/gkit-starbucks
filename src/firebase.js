import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAi9EcaIgc9hMcp_54LrOCaFKstD_eaiw4",
  authDomain: "gkit-starbucks.firebaseapp.com",
  projectId: "gkit-starbucks",
  storageBucket: "gkit-starbucks.appspot.com",
  messagingSenderId: "636156700719",
  appId: "1:636156700719:web:50bf8d419d5a5323a27eda",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
