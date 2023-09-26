
import { useEffect, useState, useContext } from "react"
import './login.css'
import Logo from '../../assets/Logo.png'
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";


export default function Login() {

  const { logged } = useContext(AuthContext)

  useEffect(() => {
    console.log(logged);
  }, [])

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user, password)
  }

  function addUser(e) {
    setUser(e.target.value);
  }

  function addPassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="container login-form">
      <form onSubmit={handleSubmit}>
        <div className="logo">
          <Link to="/"><img src={Logo} alt="Logo" /></Link>
        </div>
        <label>Usuário</label>
        <input type="text" onChange={addUser} placeholder="Digite seu usuário" />
        <label>Senha</label>
        <input type="password" onChange={addPassword} placeholder="Digite sua senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}