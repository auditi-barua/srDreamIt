import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = React.useState(true);

    const create_user = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

   

    const update_user_profile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    const sign_out = () => {
        return signOut(auth);
    }
    

    React.useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, current_user => {
            setUser(current_user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const auth_info = {
        user, loading,
        setLoading,
        create_user, login, sign_out,
        update_user_profile
    };

    return (
        <AuthContext.Provider value={auth_info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;