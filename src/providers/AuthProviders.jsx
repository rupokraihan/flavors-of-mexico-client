import React, { createContext, useEffect, useState } from 'react';
import app from '../utils/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null)

const auth =getAuth(app)

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);

  }
  const userInfo = (currentUser,name, photo) => {
    return updateProfile(currentUser, {
      displayName: name,
      photoURL:photo
    } )
  }
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    }
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    userInfo,
    signIn,
    logOut
  }



  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;