import React from 'react'
import { Formik} from "formik";
import {alert} from '../functions'
import axios from 'axios';

const CreateService = () => {
  return (
    <section>
    <div className="flex overflow-hidden min-h-[calc(100vh-13vh)]  ">
     <Formik
     
      initialValues={{ 
        name:"",
        description:"",
        image:"",
        price:"1",
        category:""
      }}
      validate={(valores) => {
        let errores = {};

        if (!valores.name) {
          errores.name = "Por favor, ingrese el nombre del servicio";
        } 
        if (!valores.description) {
          errores.description = "Por favor, ingrese la descripcion del servicio";
        } 
        if (!valores.image) {
          errores.image = "Por favor, ingrese la imagen del servicio";
        } 
        if (!valores.price) {
          errores.price = "Por favor, ingrese el precio del servicio";
        }else if(isNaN(valores.price)){
          errores.price = "Por favor, Un numero valido";

        }

       


        return errores;
      }}
      onSubmit={ async (valores, { resetForm }) => {

          const response = await axios.post(`${import.meta.env.VITE_SERVER_BACK}/service`, 
         {
          name:valores.name,
          description:valores.description,
          image:[valores.image],
          price:valores.price,
          category:valores.category.split(', ')
         })
         
         if (response.data.error) {

          alert("Error",response.data.error) 
          
         }else{
          alert("Admin","Servicio creado exitosamente")
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
      <div className="flex flex-col justify-center flex-1 px-6 py-6   ">
        <div className="w-full max-w-xl mx-auto sm:w-96">
        <div>
              <h2 className="mt-24 text-3xl font-bold text-option1-color flex justify-center">
                Creacion de servicios
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
                    Nombre del Servicio{" "}
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
                    Descripcion del servicio{" "}
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
                <div className="space-y-1">
                  <label
                    
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Image{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="image"
                      name="image"
                      type="text"
                      value={values.image}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Imagen"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                   {touched.image && errors.image && (
              <div className="error text-red-500">{errors.image}</div>
            )}
                </div>
                <div className="space-y-1">
                  <label
                    
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Precio{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="price"
                      name="price"
                      type="text"
                      value={values.price}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Contraseña"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                   {touched.price && errors.price && (
              <div className="error text-red-500">{errors.price}</div>
            )}
                </div>
                <div className="space-y-1">
                  <label
                    
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Sub Categoria{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="category"
                      name="category"
                      type="text"
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="categoria1, categoria2, categoria3"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>

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

export default CreateService