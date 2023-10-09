import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
  serverTimestamp
} from "firebase/firestore";
import { getMessaging } from 'firebase/messaging'

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
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
export const messaging = getMessaging(firebaseApp)

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [challenges, setChallenges] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [challengeId, setChallengeId] = useState(null);

  // get current user data
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unSubscribe();
  }, []);

  // sign up with google
  const signUpWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  // log out
  const logOut = () => signOut(firebaseAuth);

  // create challenge
  const addChallenge = async (title, description) => {
    try {
      const docRef = await addDoc(collection(firestore, "challenges"), {
        title,
        description,
        userId: user.uid,
        tasks: 21,
        createdAt: serverTimestamp(),
      });

      setChallengeId(docRef.id);
      AddTasks(docRef.id);
    } catch (error) {
      console.log(error);
    }
  };

  // get challenges
  useEffect(() => {
    const q = query(collection(firestore, "challenges"), orderBy("createdAt"));

    const unSubscribe = onSnapshot(q, (querySnapshot) => {
      let challengesData = [];

      querySnapshot.forEach((doc) => {
        challengesData.push({ ...doc.data(), id: doc.id });
      });

      setChallenges(challengesData);
    });

    return () => unSubscribe();
  }, []);

  // tasks data
  const data = [
    {
      count: 1,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 2,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 3,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 4,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 5,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 6,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 7,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 8,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 9,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 10,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 11,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 12,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 13,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 14,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 15,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 16,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 17,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 18,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 19,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 20,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
    {
      count: 21,
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
      createdAt: serverTimestamp(),
    },
  ];

  // delete challenge
  const deleteChallenge = async (id) => {
    await deleteDoc(doc(firestore, "challenges", id));
  };

  // create tasks
  const AddTasks = async (challengeId) => {
    const collectionRef = collection(firestore, "tasks");

    data.forEach((Task) => {
      const docRef = doc(collectionRef);

      if (challengeId) {
        setDoc(docRef, {
          ...Task,
          challengeId,
          updatedAt: serverTimestamp(),
        });
      }
    });
  };

  // get tasks
  useEffect(() => {
    const q = query(collection(firestore, "tasks"), orderBy('createdAt'));

    const unSubscribe = onSnapshot(q, (querySnapShot) => {
      let tasksArray = [];

      querySnapShot.forEach((doc) => {
        tasksArray.push({ ...doc.data(), id: doc.id });
      });

      setTasks(tasksArray);
    });

    return () => unSubscribe();
  }, []);

  // update isTrue task
  const isTrueTask = async (task) => {
    await updateDoc(doc(firestore, "tasks", task.id), {
      isTrue: !task.isTrue,
      updatedAt: serverTimestamp(),
    });
  };

  // update isTrue task
  const isFalseTask = async (task) => {
    await updateDoc(doc(firestore, "tasks", task.id), {
      isFalse: !task.isFalse,
      updatedAt: serverTimestamp(),
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        signUpWithGoogle,
        logOut,
        user,
        addChallenge,
        challenges,
        deleteChallenge,
        tasks,
        isTrueTask,
        isFalseTask,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
