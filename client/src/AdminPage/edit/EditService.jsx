import React from 'react'
import { useParams } from 'react-router-dom';

const EditService = ({id}) => {
  const { serviceId } = useParams()
  return (
    <div>EditService {serviceId}</div>
  )
}

export default EditService