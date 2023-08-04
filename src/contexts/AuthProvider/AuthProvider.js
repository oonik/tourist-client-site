import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../../component/firebase/firebase.config';

export const AuthContext = createContext();
       const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleCreateUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const handleLoginUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const authInfo = {
        handleCreateUser,
        handleLoginUser,
        loading,
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;