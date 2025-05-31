// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/config";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Email/Password signup (existing)
  function signup(email, password, displayName) {
    return createUserWithEmailAndPassword(auth, email, password).then((result) => {
      return updateProfile(result.user, {
        displayName: displayName,
      });
    });
  }

  // Email/Password login (existing)
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Google login
  function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    // Optional: Add additional scopes if needed
    // provider.addScope('profile');
    // provider.addScope('email');
    return signInWithPopup(auth, provider);
  }

  // Logout (existing)
  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    loginWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
