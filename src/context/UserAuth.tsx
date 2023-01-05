import React, { createContext, useContext } from "react";
import { auth } from "../components/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const userAuth = createContext();


export function userProvider({ children }:any) {
    function signUp(email:string, password:string) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function logIn(email:string, password:string) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const [user, setuser] = React.useState("")
    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser:any) => {
            setuser(currentUser)
        })
    }, [    ])
    return (
        <userAuth.Provider value={}>
            {children}
        </userAuth.Provider>
    )
}


export function useuserAuth() {
    return useContext(userAuth)
}