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
} from "firebase/firestore";

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

  // add challenge
  const addChallenge = async (title, description) => {    
     await addDoc(collection(firestore, "challenges"), {
      title,
      description,
      userId: user.uid,
      tasks: 21,
    }).then((docRef) => {
      setChallengeId(docRef.id);
    })
  };

  // get challenges
  useEffect(() => {
    const q = query(collection(firestore, "challenges"), orderBy("title"));

    const unSubscribe = onSnapshot(q, (querySnapshot) => {
      let challengesData = [];

      querySnapshot.forEach((doc) => {
        challengesData.push({ ...doc.data(), id: doc.id });
      });

      setChallenges(challengesData);
    });

    return () => unSubscribe();
  }, []);

  const data = [
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
    {
      isTrue: false,
      isFalse: false,
      challengeId: challengeId,
    },
  ];

  // delete challenge
  const deleteChallenge = async (id) => {
    await deleteDoc(doc(firestore, "challenges", id));
  };

  // create tasks
  const AddTasks = async () => {
    const collectionRef = collection(firestore, "tasks");
  
    data.forEach((Task) => {
      const docRef = doc(collectionRef);
      // Check for undefined challengeId property
      if (Task.challengeId !== undefined) {
        setDoc(docRef, Task);
      } else {
        console.log("Not found challenge id");
      }
    });
  };

  useEffect(() => {
    AddTasks();
  }, [challengeId]);

  // get tasks
  useEffect(() => {
    const q = query(collection(firestore, "tasks"));

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
    });
  };

  // update isTrue task
  const isFalseTask = async (task) => {
    await updateDoc(doc(firestore, "tasks", task.id), {
      isFalse: !task.isFalse,
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
