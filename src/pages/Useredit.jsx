import React from 'react'
import { useParams } from 'react-router-dom'

const Useredit = () => {
    const {user_id} = useParams()
  return (
    <div>Useredit {user_id}</div>
  )
}

export default Useredit