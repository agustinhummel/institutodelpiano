import React from 'react'
import { useParams } from 'react-router-dom';

const EditUser = ({id}) => {
  const { userId } = useParams()
  return (
    <div>EditUser {userId}</div>
  )
}

export default EditUser