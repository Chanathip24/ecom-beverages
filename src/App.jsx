import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'

//pages
import Index from './pages/Index'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Index/>}/>

        {/* 404 page */}
      </Routes>
    </>
  )
}

export default App
