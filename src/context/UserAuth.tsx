import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, causesRef, symRef } from '../components/Firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getDocs } from 'firebase/firestore';

const UserAuth = createContext<any>('');

export function UserAuthProvider({ children }: any) {
  const [user, setuser] = React.useState<any>();
  const [token, settoken] = React.useState<any>(null);
  const [userDetails, setuserDetails] = React.useState<any>({
    id: '',
    uri: '',
    email: '',
    fullname: '',
    dob: ""
  });
  let symptoms: {}[] = [];
  let causes: {}[] = [];

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function addCause (e:React.SyntheticEvent) {
    e.preventDefault()
    
  }
  React.useEffect(() => {
    getDocs(symRef)
      .then((snapshot: any) => {
        snapshot.docs.forEach((doc: any) => {
          symptoms.push({ id: doc.id, ...doc.data() });
        });
      })
      .catch((e: any) => {
        console.log(e, 'SymptomsRef Error');
      });
  }, []);

  React.useEffect(() => {
    getDocs(causesRef)
      .then((snapshot: any) => {
        snapshot.docs.forEach((doc: any) => {
          causes.push({ id: doc.id, ...doc.data() });
        });
      })
      .catch((e: any) => {
        console.log(e, 'Causes Error');
      });
  }, []);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setuser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  
  React.useEffect(()=> {
    if (localStorage.getItem("HealthScribe_Token")) {
      settoken(localStorage.getItem("HealthScribe_Token"))
    }
  }, [])


  const value = {
    //Auth
    user,
    setuser,
    userDetails,
    setuserDetails,
    logIn,
    signUp,
    signOut,
    token,

    //Data
    symptoms,
    causes
  };
  return <UserAuth.Provider value={value}>{children}</UserAuth.Provider>;
}

export function useuserAuth() {
  return useContext(UserAuth);
}
