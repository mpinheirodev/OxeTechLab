
import { useState, createContext } from "react";
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext({});


export default function AuthProvider({ children }) {


    const [user, setUser] = useState([])

    const login = async (usuario, password) => {
        await signInWithEmailAndPassword(auth, usuario, password)
            .then((userCredential) => {
                console.log("LOGOU")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const logout = () => {
        console.log("logout");
    }

    const cadastro = (usuario, email, idade, password) => {

        setUser({
            nome: usuario,
            email: email,
            idade: idade,
            password: password
        })
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Usuário Cadastrado")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function StorageUser(data) {
        localStorage.setItem('User', JSON.stringify(data))
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, cadastro }}>
            <>{children}</>
        </AuthContext.Provider>
    )
}