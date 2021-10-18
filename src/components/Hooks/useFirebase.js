import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { ListGroupItem } from "react-bootstrap";
import firebaseInitilizeApp from "../Fireabse/firebase.initilizeapp";

firebaseInitilizeApp();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState({})


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signUpWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((a) => {

                const user = a.user;
                console.log(user)
                setUser(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((a) => {
                const user = a.user;

                setUser(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });

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
        user, logOut, setUser, signUpWithGoogle, createUser, signInUser
    }
};

export default useFirebase;