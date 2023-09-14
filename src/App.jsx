
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/home'
import Sobre from './routes/sobre'
import Contato from './routes/contato'




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
    }
  ])



  return (
    <RouterProvider router={routes}/>
  )
}

export default App;


