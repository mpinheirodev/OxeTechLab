
import React, { useState, useEffect, useContext, createContext } from "react";

export const AuthContext = createContext();


export default function AuthProvider({children}){


    const [user, setUser] = useState([
        {
            name: "Matheus",
            email: "matheus@gmail.com",
            idade: "26"
        }
    ])
    const [logged, setLogged] = useState(false)

    function signIn(user, password){

    }

    return (
        <AuthContext.Provider value={logged}>
            {children}
        </AuthContext.Provider>
    )
}