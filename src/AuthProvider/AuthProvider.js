import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"; 
import toast from "react-hot-toast";


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
const [user,setUser] = useState({})
const [loading,setLoading]  = useState(true)

// create user with email and password 
const CreateUser = (email,password )  => {
    setLoading(true)
    return createUserWithEmailAndPassword (auth, email,password)
}

// send emil veirficatioin email 
const userVerify = () => {
   return sendEmailVerification(auth.currentUser)
}

// log in user with email and password 
const LogInUser = (email,password) => {
   
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}


// login with google 
const LogInGoogle = (provider) => {

    setLoading(true)
  return  signInWithPopup(auth,provider)
}

// update  user 
const updateUser = (userInfo ) => {
    setLoading(true)
    return updateProfile(auth.currentUser, userInfo)
}


// signout handlar 
const LogOut = () => {
    setLoading(true)
    setUser({})
   return signOut(auth)
}


// onAuthStateChange 
useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setLoading(false)
        if(currentUser.emailVerified){
            setUser(currentUser)

        }
         if (!currentUser.emailVerified) { 
          
            setUser({})
          
        }
        
    
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
    updateUser,
    userVerify

 }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;