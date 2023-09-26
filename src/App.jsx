
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/home'
import Sobre from './routes/sobre'
import Contato from './routes/contato'
import Login from './routes/login'
import AuthProvider from './context/auth'
import Cadastro from './routes/cadastro'




function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/sobre',
      element: <Sobre />
    },
    {
      path: '/contato',
      element: <Contato />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/cadastro',
      element: <Cadastro />
    }
  ])



  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  )
}

export default App;


