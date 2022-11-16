import { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
const [user,setUser] = useState(null)
const name = {
    displayName:'Ashrafull'
}

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


const authInfo = {
    user,
    name,
    CreateUser,
    LogInUser,
    LogInGoogle


}

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;