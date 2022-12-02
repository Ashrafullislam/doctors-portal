import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"; 


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
const [loading,setLoading]  = useState(true)
const [user,setUser] = useState({})
const [theme,setTheme] = useState(false)

// theme set dark and light 
useEffect(()=> {

    const rootElement = window.document.documentElement;
    if(theme){
        rootElement.classList.add("dark");
        rootElement.classList.remove("light");
    }
    else{
       rootElement.classList.add("light");
       rootElement.classList.remove("dark");
    }
},[theme])

// set theme light ,and dark 
const toggleTheme = () => {
    setTheme(!theme);
}

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
        setUser(currentUser)
        // the condition work  properly to verify user and access  to login 

        // if(currentUser.emailVerified){
        //     setUser(currentUser)

        // }
        //  if (!currentUser.emailVerified) { 
          
        //     setUser({})
          
        // }
        
    
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
    userVerify,
    theme,
    

 }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;