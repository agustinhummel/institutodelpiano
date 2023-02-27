import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createPost, getAllPosts } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { alert } from '../functions';

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



  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(createPost(info));
      dispatch((getAllPosts()))
      navigate('admin')
      alert('Creado y publicado con exito en el Blog')
    }

    const handleChange = function (e) {
      if(typeof e === "string"){
        setInfo({
          ...info,
          description: e
      })
      }else{
        setInfo({
          ...info,
          [e.target.name] : e.target.value
      })
    }
  }


  const handleImage = (e) => {
    e.preventDefault();
    setInfo({
      ...info,
      image: [...info.image, e.target.value],
    })
  };



  return (
    <div className='mt-20 relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl' >
      <form className='md:grid grid-cols-3 gap-4' onSubmit={(e) => handleSubmit(e)}>
      <div className='md:col-span-2 border border-sky-200 p-2'>
        <div className='md:flex justify-between mb-5'>
        <input className='px-2 py-1 m-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-300' onChange={(e) => handleChange(e)} value={info.title} type="text"  name='title' placeholder='Titulo'/>
        <input className='px-2 py-1 m-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-300' onChange={(e) => handleChange(e)} value={info.author} type="text"  name='author' placeholder='Autor'/>
        </div>
        <div >
          <ReactQuill className='md:h-80 mb-2 sm:h-6' theme="snow" name='description' value={info.description} onChange={(e) => handleChange(e)}/>
        </div>
      </div>
      <div className='border border-sky-200 p-2'>
          <div>
        <div>
        <input className='w-auto px-2 py-1 mt-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-300' onChange={(e) => handleImage(e)} type="text" name='image' placeholder='Imagen URL...' value={info.image} />
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
export default CreatePost


// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";


// const CreatePost = () => {
//   const state = useLocation().state;
//   const [value, setValue] = useState(state?.title || "");
//   const [title, setTitle] = useState(state?.description || "");
//   const [autor, setAutor] = useState(state?.autor || "");
//   const [file, setFile] = useState(null);
//   const navigate = useNavigate()



//   const handleClick = async (e) => {
//     e.preventDefault();
//     const imgUrl = await upload();
    

//     try {
//       state
//         ? await axios.put(`/posts/${state.id}`, {
//             title,
//             desc: value,
//             autor,
//             img: file ? imgUrl : "",
//           })
//         : await axios.post(`/posts/`, {
//             title,
//             desc: value,
//             autor,
//             img: file ? imgUrl : "",
//           });
//           navigate("/")
//           console.log('aaaaaaaaa')
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="mt-40" >
//       <div >
//         <input
//           type="text"
//           placeholder="Title"
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <div >
//           <ReactQuill
//             theme="snow"
//             value={value}
//             onChange={setValue}
//           />
//         </div>
//       </div>
//       <div >
//         <div >
//           <input type="text" placeholder="autor" id="autor" onChange={(e) => setAutor(e.target.value)} />
//           <input
//             style={{ display: "none" }}
//             type="file"
//             id="file"
//             name=""
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//           <label  htmlFor="file">
//             Upload Image
//           </label>
//           <div >
//             <button onClick={handleClick}>Publish</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreatePost;