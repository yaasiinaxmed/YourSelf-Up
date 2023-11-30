import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE,
  messagingSenderId: import.meta.env.VITE_SenderId,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_ID,
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

export const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider value={{}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
