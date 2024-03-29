import React from 'react'
import Select from 'react-select';
import {alert} from '../functions'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const EditProfessional = () => {
  const navigate = useNavigate()
  const {professionalId} = useParams()
  const servicios = useSelector(state => state.services).map(s => ({value:s.name,label:s.name.charAt(0).toUpperCase() + s.name.toLowerCase().slice(1)}))
  const professional = useSelector(state => state.professionals).find(p => p.id ==professionalId )
  const [errors, setErrors] = useState({});

  const [state, setState] = useState({
    fullName:professional.fullName,
    avatar:professional.avatar,
    phone:professional.phone,
    services:professional.Services.map((s) => s.name)
  });
  

  let selectChange = (values) => {
    let newState = {...state,services:values.map(v => v.value)}
    setErrors(validate(newState))
    setState(newState)
  }

  let handleChange = (e) => {
    e.preventDefault()
    let newState ={
      ...state,
      [e.target.name]:e.target.value
    }

    setState(newState)
    setErrors(validate(newState))
  }

  let validate=(state) => {
    let errores = {};

    if (!state.fullName) {
      errores.fullName = "Por favor, ingresa el nombre del profesional";
    } 
    if (state.services.length ==0 ) {
      errores.services = "Por favor, seleccionar un servicio"
    }
    return errores;
  }
 

  let onSubmit=async (e) => {
    e.preventDefault()
    setErrors(validate(state))
    if (Object.values(validate(state)).length ==0) {
      const response = await axios.put(`${import.meta.env.VITE_SERVER_BACK}/professional`, 
   {
      id:professionalId,
      fullName:state.fullName,
      avatar:state.avatar,
      phone:state.phone,
      services:state.services 
   })
   
   if (response.data.error) {

    alert("Error",response.data.error) 

  }else{
    alert("Admin","Profesional creado exitosamente")
    navigate('/admin')
   } 

    }else{
      alert('Error',"Tienes campos sin completar")
    }

}

  return (
    <section>
    <div className="flex overflow-hidden min-h-[calc(100vh-13vh)]  ">
  
      <div className="flex flex-col justify-center flex-1 px-4  py-4 ">
        <div className="w-full max-w-xl mx-auto sm:w-96">
        <div>
              <h2 className="mt-24 text-3xl font-bold text-option1-color flex justify-center">
                Editar profesional
              </h2>
            </div>

          <div className="mt-8">
            <div className="mt-6">
              <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-1">
                  <label
                    
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Servicios{" "}
                  </label>
                  <div className="mt-1">
                    
                  <Select
                  defaultValue={servicios.filter(s => state.services.includes(s.value))}
                    onChange={selectChange}
                    isMulti
                    name="services"
                    options={servicios}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                  </div>
                  {errors.services && <div className="error text-red-500 mx-3">{errors.services}</div>}
                </div>
              <div className="space-y-1">
                  <label
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Nombre de Usuario{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      onChange={handleChange}
                      value={state.fullName}
                      placeholder="Nombre de Usuario"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                  {errors.fullName && <div className="error text-red-500 mx-3">{errors.fullName}</div>}

                </div>
                
                <div className="space-y-1">
                  <label
                    
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Avatar{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="avatar"
                      name="avatar"
                      type="text"
                      onChange={handleChange}
                      value={state.avatar}
                      placeholder="Avatar"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                  {errors.avatar && <div className="error text-red-500 mx-3">{errors.avatar}</div>}

                </div>
                <div className="space-y-1">
                  <label
                    
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Telefono{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      value={state.phone}
                      onChange={handleChange}
                      placeholder="Telefono"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                  {errors.phone && <div className="error text-red-500 mx-3">{errors.phone}</div>}

                </div>
                <div>
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-dark-color transition duration-500 ease-in-out transform bg-main-color rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Editar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default EditProfessional