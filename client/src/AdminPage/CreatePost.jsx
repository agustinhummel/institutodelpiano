import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createPost } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate, redirect } from "react-router-dom";
import { alert, error } from '../functions';

const CreatePost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [info, setInfo] = useState(
    {
      title: "",
      description: "",
      image:[],
      author:""
    }
  )

  const [errors, setErrors] = useState({});



  const validate = (valor) => {
    let error = {};

    if (!valor.title ) {
      error.title = 'Ingrese un Titulo.'
    }
    if (!valor.author ) {
      error.author = 'Ingrese el autor del post.'
    }
    if (valor.image.length === 0) {
      error.image = 'Ingrese la URL de la imagen.'
    }
    if (!valor.description) {
      error.description = 'Ingrese una descripcion al Post.'
    }

    return error;

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(
      !info.title ||
      !info.description ||
      !info.author ||
      !info.image){
        error('Completar todos los campos');
        setErrors(validate({
          ...info
        }));

    }else{
      dispatch(createPost(info));
      navigate('/admin')
      alert('Post creado con exito')
    }
    }

    const handleChange = function (e) {
      if(typeof e === "string"){
        setInfo({...info, description: e});
        setErrors(validate({...info, description: e}))
      }else{
        setInfo({ ...info, [e.target.name] : e.target.value});
        setErrors(validate({...info, [e.target.name] : e.target.value }))
    }
  
  }


  const handleImage = (e) => {
    e.preventDefault();
    setInfo({...info, image: [...info.image, e.target.value]})
    setErrors(validate({...info, image: [...info.image, e.target.value]}))
  };



  return (
    <div className='mt-20 relative  items-center w-full min-h-[calc(100vh-13vh)] px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl' >
      <form className='md:grid grid-cols-3 gap-4' onSubmit={(e) => handleSubmit(e)}>
      <div className='md:col-span-2 border border-gray-600 p-2'>
        <div className='md:flex justify-between'>
        <input className='px-2 py-1 m-2 text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-300' onChange={(e) => handleChange(e)} value={info.title} type="text"  name='title' placeholder='Titulo'/>
        <div className="error text-red-500 mx-3">{errors.title}</div>
        <input className='px-2 py-1 m-2 text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-300' onChange={(e) => handleChange(e)} value={info.author} type="text"  name='author' placeholder='Autor'/>
        <div className="error text-red-500 mx-3">{errors.author}</div>
        </div>
        <div className='m-2' >
          <ReactQuill className='md:h-80 mb-2 sm:h-6' theme="snow" name='description' value={info.description} onChange={(e) => handleChange(e)}/>
        </div>
        <div className="error text-red-500 mx-3">{errors.description}</div>
      </div>
      <div className='border border-gray-600 p-2'>
          <div>
        <div>
        <input className='w-auto px-2 py-1 mt-2 text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-300' onChange={(e) => handleImage(e)} type="text" name='image' placeholder='Imagen URL...' value={info.image} />
        <div className="error text-red-500">{errors.image}</div>
      </div>
          <div className='md:mt-96 grid justify-end sm:h-auto m-2'>
            <button className='px-5 py-2 text-base font-medium text-center text-dark-color transition duration-500 ease-in-out transform bg-main-color rounded-xl hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-100' type='submit' >Publicar</button>
          </div>
        </div>
      </div>
    </form>
    </div>
  )
}
export default CreatePost;