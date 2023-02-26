import React from 'react'
import { useParams } from 'react-router-dom'

const EditPost = () => {
  const { postId } = useParams()
  return (
    <div>EditPost {postId}</div>
  )
}

export default EditPost