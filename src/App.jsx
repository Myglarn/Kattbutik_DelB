import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar.jsx"
import Home from './pages/Home.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' ekement={Home} />
    </Routes>

      
    </>
  )
}

export default App
