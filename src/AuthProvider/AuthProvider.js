import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"; 


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
const [user,setUser] = useState(null)
const [loading,setLoading]  = useState(null)

// create user with email and password 
const CreateUser = (email,password )  => {
    return createUserWithEmailAndPassword (auth, email,password)
}


// log in user with email and password 
const LogInUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
}


// login with google 
const LogInGoogle = (provider) => {
  return  signInWithPopup(auth,provider)
}

// update  user 
const updateUser = (userInfo ) => {
    return updateProfile(user,userInfo)
}


// signout handlar 
const LogOut = () => {
    signOut(auth)
}


// onAuthStateChange 
useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
    })
    return ()=> unsubscribe()

},[])


const authInfo = {
    user,
    CreateUser,
    LogInUser,
    LogInGoogle,
    loading,
    LogOut,
    updateUser

 }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;