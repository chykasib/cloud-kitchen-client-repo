import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInByEmailAndPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(email, password)
    }

    const logOut = () => {
        setLoading(true)
        // localStorage.removeItem()
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser);
            return () => {
                return unsubscribe()
            }
        })
    }, [])
    const userInfo = {
        user,
        loading,
        createUser,
        signInByEmailAndPassword,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;