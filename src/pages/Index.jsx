import React from 'react'
import '../App.css'
//component
import Hero from '../components/Hero/Hero'
import Subhero from '../components/subhero/Subhero'
import Topseller from '../components/Topseller/Topseller'
import Navbar from '../components/Navbar/Navbar'
import Announce2 from '../components/Announce2/Announce2'
import Typedrink from '../components/Typedrink/Typedrink'
import Scb from '../components/Subscribecarousel/Scb'
const Index = () => {
  return (
    <>
    <main>
      <Navbar/>
      <Hero/>
      <Subhero/>
      <Topseller/>
      <Announce2/>
      <Typedrink/>
      <Scb/>
    </main>

    
    
    </>
  )
}

export default Index