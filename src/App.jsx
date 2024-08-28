import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

//pages
import Index from './pages/Index'
import Login from './pages/Login'


function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='*' element={<Index/>}/>
          {/* 404 page */}
        </Routes>
    </Router>

    </>
  )
}

export default App
