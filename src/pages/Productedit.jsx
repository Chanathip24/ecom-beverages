import React from 'react'
import { useParams } from 'react-router-dom'

const Productedit = () => {
    const {product_id} = useParams()
  return (
    <div>Productedit {product_id}  </div>
  )
}

export default Productedit