import { getAuth, signOut, onAuthStateChanged,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import firebaseInitilizeApp from "../Fireabse/firebase.initilizeapp";

firebaseInitilizeApp();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signUpWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {

        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({});
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    return {
        user, logOut, setUser, signUpWithGoogle ,setError,error
    }
};

export default useFirebase;