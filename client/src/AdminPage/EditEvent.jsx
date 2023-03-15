import React from 'react'
import { useParams } from 'react-router-dom';
import { Formik} from "formik";
import {alert} from '../functions'
import axios from 'axios';
import { useSelector } from 'react-redux';

const EditEvent = () => {

  const { eventId } = useParams()
  const event = useSelector((state) => state.eventos.find(e=>e.id == eventId))
  
  return (
    <section>
      <div className="flex overflow-hidden min-h-[calc(100vh-13vh)]  ">
       <Formik
       
        initialValues={{ 
          name: event.name,
          description: event.description,
          start: event.start,
          end: event.end
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion password
          if (!valores.name) {
            errores.name = "Por favor, ingresa el nombre de obra social";
          } 
          if (!valores.description) {
            errores.description = "Por favor, ingrese una descripcion";
          } 
          if (!valores.start) {
            errores.start = "Por favor, ingrese la fecha de inicion";
          } 
          if (!valores.end) {
            errores.end = "Por favor, ingrese la fecha de finalizacion";
          } 


          return errores;
        }}
        onSubmit={ async (valores, { resetForm }) => {

            const response = await axios.put(`${import.meta.env.VITE_SERVER_BACK}/event`, 
           {

               name: valores.name,
               description: valores.description,
               start: valores.start,
               end: valores.end, 
               eventId: eventId,
               
           })
           console.log(response.data)
           if (response.data.error) {

            alert("Error",response.data.error) 
            
           }else{
            alert("Admin","Evento editado exitosamente")
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
        <div className="flex flex-col justify-center flex-1 px-4 py-4 py-6 ">
          <div className="w-full max-w-xl mx-auto sm:w-96">
          <div>
              <h2 className="mt-24 text-3xl font-bold text-option1-color flex justify-center">
                Editar Evento
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
                      Nombre del Evento{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Nombre del evento"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                     {touched.name && errors.name && (
                <div className="error text-red-500 mt-8">{errors.name}</div>
                
              )}
                                  <label
                      
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Descripcion del Evento{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="description"
                        name="description"
                        type="text"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Descripcion del evento"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                     {touched.description && errors.description && (
                <div className="error text-red-500 mt-8">{errors.description}</div>
                
              )}
                                  <label
                      
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Inicio del Evento{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="start"
                        name="start"
                        type="text"
                        value={values.start}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Nombre del evento"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                     {touched.start && errors.start && (
                <div className="error text-red-500 mt-8">{errors.start}</div>
                
              )}
                                  <label
                      
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Fin del Evento{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="end"
                        name="end"
                        type="text"
                        value={values.end}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Nombre del evento"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                     {touched.end && errors.end && (
                <div className="error text-red-500 mt-8">{errors.end}</div>
                
              )}
                  
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

export default EditEvent