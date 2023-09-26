

import { useEffect, useState, useContext } from "react"
import '../login/login.css'
import Logo from '../../assets/Logo.png'
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";


export default function Cadastro() {

  const { user, login, logout, cadastro } = useContext(AuthContext)

  useEffect(() => {
    
  }, [])

  const [usuario, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    cadastro(usuario, password, email, idade);
  }

  function addUser(e) {
    setUser(e.target.value);
  }

  function addPassword(e) {
    setPassword(e.target.value);
  }

  function addEmail(e) {
    setEmail(e.target.value);
  }

  function addIdade(e) {
    setIdade(e.target.value);
  }

  return (
    <div className="container login-form">
        <h1>CADASTRO</h1>
      <form onSubmit={handleSubmit}>
        <div className="logo">
          <Link to="/"><img src={Logo} alt="Logo" /></Link>
        </div>
        <label>Usuário</label>
        <input type="text" onChange={addUser} placeholder="Digite seu usuário" />
        <label>E-mail</label>
        <input type="text" onChange={addEmail} placeholder="Digite seu e-mail..." />
        <label>Idade</label>
        <input type="text" onChange={addIdade} placeholder="Digite sua idade" />
        <label>Senha</label>
        <input type="password" onChange={addPassword} placeholder="Digite sua senha" />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}