import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const googleUsers = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const githubUsers = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };


  const createUsers = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // const resetPassword = (email) =>{
  //   return sendPasswordResetEmail(auth, email)
  // }

  const LoginUsers = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logoutUsers = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser);
      setLoading(false)
    })
    return () =>{
      unSubscribe();
    }
  },[])


  const authInfo = {
    user,
    googleUsers,
    githubUsers,
    createUsers,
    LoginUsers,
    logoutUsers,
    loading,
    //resetPassword,
  };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.object,
};