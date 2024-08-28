import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'

//pages
import Index from './pages/Index'
import Login from './pages/Login'


function App() {

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/login' element={<Login/>} />
        {/* 404 page */}
      </Routes>
    </>
  )
}

export default App
