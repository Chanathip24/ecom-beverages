import React from 'react'
import { useParams } from 'react-router-dom'
import Announce from '../components/Announcemnet/Announce'
import Navbar from '../components/Navbar/Navbar'
import Productcomp from '../components/ProductComp/Productcomp'

const Product = () => {
  const { id } = useParams()
  return (
    <>
      <Announce />
      <Navbar />
      <Productcomp/>

    </>
  )
}

export default Product