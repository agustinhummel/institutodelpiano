import React, { useState } from 'react'

import {alert} from '../functions'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';

const EditPost = () => {
  
  const navigate = useNavigate()
  const { postId } = useParams()
  const postFound = useSelector(state => state.posts.find(s => s.id==postId))

  const [post, setPost] = useState(postFound)


  const onSubmit = async () => {
    const response = await axios.put(`${import.meta.env.VITE_SERVER_BACK}/post/${postId}`, 
  {
   postId:postId,
   title:post.title,
   description:post.descripcion,
   image:[post.image],
   author:post.author

  })
  
  if (response.data.error) {
   alert("Error",response.data.error) 
   
  }else{
   
   alert("Admin","Post editado exitosamente")
   navigate('/admin')
  } 
  }


  const handleChange = (e) => {
    if(e.target){
      setPost({...post, [e.target.name]: e.target.value })
    }else{
      setPost({...post, descripcion: e})
    }
  }

  return (

    <div className="flex overflow-hidden min-h-[calc(100vh-13vh)]  ">
    <div className="flex flex-col justify-center flex-1 px-4 py-4">
        <div className="w-full max-w-xl mx-auto sm:w-96">
        <div>
              <h2 className="mt-24 text-3xl font-bold text-option1-color flex justify-center">
                Editar post
              </h2>
            </div>

          <div className="mt-8">
            <div className="mt-6">
              
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
                      value={post.title}
                      onChange={(e)=>handleChange(e)}
                      
                      placeholder="Titulo"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                   
                </div>
                <div>
                  <label
                    
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Descripcion del post{" "}
                  </label>
                  <div className="mt-1">
                    <ReactQuill
                      id="description"
                      name="description"
                      type="text"
                      defaultValue={post.description}
                      onChange={handleChange}
                      
                      placeholder="Descripcion"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                   
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
                      value={post.image}
                      onChange={handleChange}
                      
                      placeholder="Imagen"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                   
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
                      value={post.author}
                      onChange={handleChange}
                      
                      placeholder="Autor"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                   
                </div>
                <div>
                  <button
                    onClick={onSubmit}
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-dark-color transition duration-500 ease-in-out transform bg-main-color rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Editar
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}


export default EditPost