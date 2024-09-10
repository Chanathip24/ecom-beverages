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
import Announce from '../components/Announcemnet/Announce'
import Footer from '../components/Footer/Footer'
const Index = () => {
  return (
    <>
    <main>
      <Announce/>
      <Navbar/>
      <Hero/>
      <Topseller/>
      <Subhero/>
      <Announce2/>
      <Typedrink/>
      <Scb/>
      <Footer/>
    </main>

    
    
    </>
  )
}

export default Index