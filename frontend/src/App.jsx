import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Master from './components/Master/Master'

function App() {
  const [count, setCount] = useState(0)

  const customRoutes = createBrowserRouter([
    {
      path: "/", element: <Master />, children: [
        { index: true, element: <h1>HOME</h1> },
        { path: "home", element: <h1>HOME</h1> },
        { path: "menu", element: <h1>menu</h1> },
        { path: "account", element: <h1>account</h1> },
        { path: "blog", element: <h1>blog</h1> },
        { path: "contact", element: <h1>contact</h1> },
        { path: "about", element: <h1>about</h1> },
        { path: "cart", element: <h1>cart</h1> },
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={customRoutes}></RouterProvider>
    </>
  )
}

export default App
