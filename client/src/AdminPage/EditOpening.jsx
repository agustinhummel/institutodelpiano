import React from 'react'
import { Formik} from "formik";
import {alert} from '../functions'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EditOpening = () => {
  const { openingId } = useParams()
  const opening = useSelector(state => state.openings.find(s => s.id==openingId))
  return (
    <section>
    <div className="flex overflow-hidden min-h-[calc(100vh-13vh)]  ">
     <Formik
     
      initialValues={{ 
        name:opening.name,
        description:opening.description
      }}
      validate={(valores) => {
        let errores = {};

        if (!valores.name) {
          errores.name = "Por favor, ingrese el titulo de la vacante";
        } 
        if (!valores.description) {
          errores.description = "Por favor, ingrese la descripcion de la vacante";
        } 
        return errores;
      }}
      onSubmit={ async (valores, { resetForm }) => {

          const response = await axios.put(`${import.meta.env.VITE_SERVER_BACK}/opening/${openingId}`, 
         {

          openingId:openingId,
          name:valores.name,
          description:valores.description,
             
         })
         
         if (response.data.error) {
          alert("Error",response.data.error) 
          
         }else{
          
          alert("Admin","opening editado exitosamente")
         } 
            resetForm();
    
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
      <div className="flex flex-col justify-center flex-1 px-4 py-4">
        <div className="w-full max-w-xl mx-auto sm:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
              Editar Vacante
            </h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                  <label
                    
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Nombre de la Vacante{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Nombre"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                   {touched.name && errors.name && (
              <div className="error text-red-500">{errors.name}</div>
            )}
                </div>
                <div>
                  <label
                    
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Descripcion de la Vacante{" "}
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="description"
                      name="description"
                      type="text"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Descripcion"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                   {touched.description && errors.description && (
              <div className="error text-red-500">{errors.description}</div>
            )}
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
       )}
    </Formik>
    </div>
  </section>
  )
}

export default EditOpening