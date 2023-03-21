import React from 'react'
import { useParams } from 'react-router-dom';
import { Formik} from "formik";
import {alert} from '../functions'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const EditObraSocial = () => {
  const navigate = useNavigate()
  const { obraSocialId } = useParams()
  const obras = useSelector((state) => state.obraSocials.find(o=>o.id==obraSocialId))
  return (
    <section>
      <div className="flex overflow-hidden min-h-[calc(100vh-13vh)]  ">
       <Formik
       
        initialValues={{ 
          name: obras.name,
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion password
          if (!valores.name) {
            errores.name = "Por favor, ingresa el nombre de obra social";
          } 


          return errores;
        }}
        onSubmit={ async (valores, { resetForm }) => {

            const response = await axios.put(`${import.meta.env.VITE_SERVER_BACK}/obraSocial`, 
           {

               name: valores.name,
               obrasId: obrasId,
               
           })
           console.log(response.data)
           if (response.data.error) {

            alert("Error",response.data.error) 
            
           }else{
            alert("Admin","Obra Social editado exitosamente")
            navigate('/admin')
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
        <div className="flex flex-col justify-center flex-1 px-4 py-6 ">
          <div className="w-full max-w-xl mx-auto sm:w-96">
          <div>
              <h2 className="mt-24 text-3xl font-bold text-option1-color flex justify-center">
                Editar Obra social
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
                      Nombre de Obra Social{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Nombre de Obra Social"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                     {touched.name && errors.name && (
                <div className="error text-red-500 mt-8">{errors.name}</div>
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

export default EditObraSocial