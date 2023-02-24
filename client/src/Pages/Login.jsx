 import React from "react";
 import { Formik} from "formik";
import { loginUser } from "../Redux/Actions/actions";
import { useDispatch } from 'react-redux';  
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from 'axios';

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const alert = (messageTittle,message)=>Swal.fire({
        title: messageTittle,
        html: message,
        timer: 3000,
        timerProgressBar: true,
        })

  return (
    <section>
      <div className="flex overflow-hidden min-h-[calc(100vh-13vh)]  ">
       <Formik
       
        initialValues={{ 
          password: "",
          correo: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion password
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

            const response = await axios.post(`${import.meta.env.VITE_SERVER_BACK}/auth/login`, 
           {
               password: valores.password, 
               email: valores.correo,
               
           })
           
           if (response.data.accessToken) {
               localStorage.setItem("user",JSON.stringify(response.data.accessToken))
               alert("Login Exitoso","Bienvenido")
               navigate('/')
               dispatch(loginUser())  
            
           }else{
               alert("Error",response.data.error)
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
        <div className="flex flex-col justify-center flex-1 px-4  ">
          <div className="w-full max-w-xl mx-auto lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
                Instituto DelPiano
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
                        placeholder="Tu Correo"
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
                        placeholder="Tu Contraseña"
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
                      Ingresar
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
  );
};

export default Login;
 