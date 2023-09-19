
import './navbar.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'



export default function Navbar() {

  return (
    <nav className='navbar'>
      <div className="logo">
        <Link to="/"><img src={Logo} alt='Logo'/></Link>
      </div>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>
      <div className='login-btn'>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}