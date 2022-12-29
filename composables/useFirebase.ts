import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const useFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDSrNMcOHIE_QuQTskPFRXfBCCltMtedzQ",
    authDomain: "mateomd-dev-3dbc8.firebaseapp.com",
    projectId: "mateomd-dev-3dbc8",
    storageBucket: "mateomd-dev-3dbc8.appspot.com",
    messagingSenderId: "1029283081974",
    appId: "1:1029283081974:web:00118cb5f57539a1d886d7",
    measurementId: "G-P67BK011YW"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);

  return {
    firebaseApp,
    firestore
  } 
}
