import React from 'react'
import { Formik} from "formik";
import {alert} from '../functions'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const navigate = useNavigate()
  return (
    <section>
      <div className="flex overflow-hidden min-h-[calc(100vh-13vh)]  ">
       <Formik
       
        initialValues={{ 
          password: "",
          correo: "",
          userName: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion password
          if (!valores.userName) {
            errores.userName = "Por favor, ingresa el nombre de usuario";
          } 
          if (!valores.password) {
            errores.password = "Por favor, ingresa una contraseña";
          } 

          // Validacion correo
          if (!valores.correo) {
            errores.correo = "Por favor, ingresa un correo electrónico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo =
              "Por favor, ingresa un correo electrónico valido";
          }


          return errores;
        }}
        onSubmit={ async (valores, { resetForm }) => {

            const response = await axios.post(`${import.meta.env.VITE_SERVER_BACK}/user`, 
           {
               password: valores.password, 
               email: valores.correo,
               userName: valores.userName
               
           })
           
           if (response.data.error) {

            alert("Error",response.data.error) 
            
           }else{
            alert("Admin","Usuario creado exitosamente")
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
        <div className="flex flex-col justify-center flex-1 px-6 py-6  ">
          <div className="w-full max-w-xl mx-auto sm:w-96">
            <div>
              <h2 className="mt-24 text-3xl font-bold text-option1-color flex justify-center">
                Creacion de usuario
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Correo Electronico{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="correo"
                        name="correo"
                        type="text"
                        value={values.correo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Correo Electronico"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                     {touched.correo && errors.correo && (
                <div className="error text-red-500">{errors.correo}</div>
              )}
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
                        id="useName"
                        name="userName"
                        type="text"
                        value={values.userName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Nombre de Usuario"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                     {touched.userName && errors.userName && (
                <div className="error text-red-500">{errors.userName}</div>
              )}
                  </div>
                  <div className="space-y-1">
                    <label
                      
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Contraseña{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Contraseña"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                     {touched.password && errors.password && (
                <div className="error text-red-500">{errors.password}</div>
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

export default CreateUser