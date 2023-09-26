
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/home'
import Sobre from './routes/sobre'
import Contato from './routes/contato'
import Login from './routes/login'
import AuthProvider from './context/auth'




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
    }
  ])



  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  )
}

export default App;


