import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Gallary from './components/Gallary/Gallary'
import Products from './components/Products/Products'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound';


const routes = createBrowserRouter([
  {
    path: '', element: <Layout />,
     children: [
      { index: true, element: <Home /> },
      { path: 'About', element: <About /> },
      { path: 'Gallary', element: <Gallary /> },
      { path: 'Products', element: <Products /> },
      { path: '*', element: <NotFound /> },
    ]
  }
])

function App() {

 return <>

<RouterProvider router={routes}></RouterProvider>
 </>
}

export default App
