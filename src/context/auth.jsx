
import React, { useState, createContext } from "react";

export const AuthContext = createContext({});


export default function AuthProvider({children}){


    const [user, setUser] = useState([])

    const [logged, setLogged] = useState(false)

    const login = (usuario, password) => {
        console.log(usuario, password);
    }

    const logout = () => {
        console.log("logout");
    }

    const cadastro = (usuario, email, idade, password) => {

        setUser({
            nome: usuario,
            email:email,
            idade:idade,
            password:password
        })
    }

    return (
        <AuthContext.Provider value={logged}>
            <>{children}</>
        </AuthContext.Provider>
    )
}