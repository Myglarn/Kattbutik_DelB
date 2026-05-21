import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar.jsx"
import Home from './pages/Home.jsx'
import './App.css'
import Cats from './pages/Cats.jsx'
import About from './pages/About.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cats' element={<Cats />} />
      <Route path='/about' element={<About />} />
    </Routes>

      
    </>
  )
}

export default App
