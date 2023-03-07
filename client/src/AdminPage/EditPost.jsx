import React from 'react'
import { Formik} from "formik";
import {alert} from '../functions'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EditPost = () => {
  const { postId } = useParams()
  const post = useSelector(state => state.posts.find(s => s.id==postId))
  return (
    <section>
    <div className="flex overflow-hidden min-h-[calc(100vh-13vh)]  ">
     <Formik
     
      initialValues={{ 
        title:post.title,
        description:post.description,
        image:post.image,
        author:post.author
      }}
      validate={(valores) => {
        let errores = {};

        if (!valores.title) {
          errores.title = "Por favor, ingrese el titulo del post";
        } 
        if (!valores.description) {
          errores.description = "Por favor, ingrese la descripcion del post";
        } 
        if (!valores.image) {
          errores.image = "Por favor, ingrese la imagen del post";
        } 
        if (!valores.author) {
          errores.author = "Por favor, ingrese el autor del post";
        }

       


        return errores;
      }}
      onSubmit={ async (valores, { resetForm }) => {

          const response = await axios.put(`${import.meta.env.VITE_SERVER_BACK}/post/${postId}`, 
         {

          postId:postId,
          title:valores.title,
          description:valores.description,
          image:[valores.image],
          author:valores.author
             
         })
         
         if (response.data.error) {
          alert("Error",response.data.error) 
          
         }else{
          
          alert("Admin","Post editado exitosamente")
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
              Editar Posteo
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
                    Titulo del Post{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="title"
                      name="title"
                      type="text"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Titulo"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                   {touched.title && errors.title && (
              <div className="error text-red-500">{errors.title}</div>
            )}
                </div>
                <div>
                  <label
                    
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Descripcion del post{" "}
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
                    Autor{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="author"
                      name="author"
                      type="text"
                      value={values.author}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Autor"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                   {touched.author && errors.author && (
              <div className="error text-red-500">{errors.author}</div>
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

export default EditPost