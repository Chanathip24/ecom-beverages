import React from 'react'

//component
import Hero from '../components/Hero/Hero'
import Subhero from '../components/subhero/Subhero'
import Topseller from '../components/Topseller/Topseller'
import Navbar from '../components/Navbar/Navbar'
const Index = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Subhero/>
    <Topseller/>
    </>
  )
}

export default Index