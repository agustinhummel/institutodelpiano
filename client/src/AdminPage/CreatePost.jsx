import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createPost, getAllPosts } from '../redux/actions';
import { useDispatch } from 'react-redux';


const CreatePost = () => {
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
      console.log(info)
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
    <div className='mt-40' >
      <form onSubmit={(e) => handleSubmit(e)}>
      <div>
      <input onChange={(e) => handleChange(e)} value={info.title} type="text"  name='title' placeholder='Titulo'/>
        <div>
          <ReactQuill theme="snow" name='description' value={info.description} onChange={(e) => handleChange(e)} />
        </div>
      </div>
      <div>
          <div>
          <input onChange={(e) => handleChange(e)} value={info.author} type="text"  name='author' placeholder='Autor'/>
        <div>
        <input onChange={(e) => handleImage(e)} type="text" name='image' placeholder='Image Url..' value={info.image} />
      </div>
          <div>
            <button type='submit' >Guardar</button>
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