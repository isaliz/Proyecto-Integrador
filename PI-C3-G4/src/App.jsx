import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from "./Routes/Footer";
import Home from './Routes/Home'
import { useContext } from './Utils/Context'
import './App.css'

function App() {
  const { state } = useContext()
  return (
    <Router>
      <div className={`${state.theme}`}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={() => <h1>Not Found</h1>} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  )
}

export default App
