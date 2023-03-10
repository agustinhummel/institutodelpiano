import React from 'react'
import { Formik} from "formik";
import {alert} from '../functions'
import axios from 'axios';

const CreateObraSocial = () => {
  return (
    <section>
      <div className="flex overflow-hidden min-h-[calc(100vh-13vh)]  ">
       <Formik
       
        initialValues={{ 
          name: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion password
          if (!valores.name) {
            errores.name = "Por favor, ingresa el nombre de usuario";
          } return errores;
        }}
        onSubmit={ async (valores, { resetForm }) => {

            const response = await axios.post(`${import.meta.env.VITE_SERVER_BACK}/obraSocial`, 
           {
      
               name: valores.name
               
           })
           
           if (response.data.error) {

            alert("Error",response.data.error) 
            
           }else{
            alert("Admin","Obra social creado exitosamente")
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
        <div className="flex flex-col justify-center flex-1 px-6 py-6  ">
          <div className="w-full max-w-xl mx-auto sm:w-96">
            <div>
              <h2 className="mt-24 text-3xl font-bold text-option1-color flex justify-center">
                Creacion de Obra Social
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
                      Nombre {" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Nombre de la Obra Social"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                     {touched.name && errors.name && (
                <div className="error text-red-500">{errors.name}</div>
              )}
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-dark-color transition duration-500 ease-in-out transform bg-main-color rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Crear
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

export default CreateObraSocial