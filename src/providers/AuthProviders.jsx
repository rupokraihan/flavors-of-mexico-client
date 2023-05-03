import React, { createContext } from 'react';
import app from '../utils/firebase.config';
import { getAuth } from "firebase/auth";


export const AuthContext = createContext(null)

const auth =getAuth(app)

const AuthProviders = ({children}) => {

  const user = {displayName:'rupok'}
  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;