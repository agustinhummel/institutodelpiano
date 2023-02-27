import React from 'react'
import { useParams } from 'react-router-dom';

const EditProfessional = () => {
  const { professionalId } = useParams()
  return (
    <div>EditProfessional {professionalId}</div>
  )
}

export default EditProfessional