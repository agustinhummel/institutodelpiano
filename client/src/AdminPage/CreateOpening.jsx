import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createOpening } from '../Redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate, redirect } from "react-router-dom";
import { alert, error } from '../functions';

const CreateOpening = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [info, setInfo] = useState(
    {
      name: "",
      description: "",
    }
  )

  const [errors, setErrors] = useState({});



  const validate = (valor) => {
    let error = {};

    if (!valor.name ) {
      error.name = 'Ingrese un Nombre.'
    }
    if (!valor.description) {
      error.description = 'Ingrese una descripcion a la vancate.'
    }

    return error;

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(
      !info.name ||
      !info.description ){
        error('Completar todos los campos');
        setErrors(validate({
          ...info
        }));

    }else{
      dispatch(createOpening(info));
      navigate('/admin')
      alert('Vacante creada con exito')
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


  return (
    <div className='mt-20 relative  items-center w-full min-h-[calc(100vh-13vh)] px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl' >
            <div>
              <h2 className="text-3xl font-bold text-option1-color flex justify-center mb-8">
                Creacion de vacante
              </h2>
            </div>
      <form className='md:grid grid-cols-3 gap-4' onSubmit={(e) => handleSubmit(e)}>
      <div className='md:col-span-2 border border-gray-600 p-2'>
        <div className='md:flex justify-between'>
        <input className='px-2 py-1 m-2 text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-300' onChange={(e) => handleChange(e)} value={info.name} type="text"  name='name' placeholder='Nombre'/>
        <div className="error text-red-500 mx-3">{errors.name}</div>
        </div>
        <div className='m-2' >
          <ReactQuill className='md:h-80 mb-2 sm:h-6' theme="snow" name='description' value={info.description} onChange={(e) => handleChange(e)}/>
        </div>
        <div className="error text-red-500 mx-3">{errors.description}</div>
      </div>
      <div className='border border-gray-600 p-2'>
          <div>
        <div>
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
export default CreateOpening;