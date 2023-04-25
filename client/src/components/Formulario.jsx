import axios from 'axios';
import React, {useState} from 'react';
import { Formik } from 'formik';

const Formulario = () => {

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <div className="lg:w-1/3 md:w-1/2 px-8 border-2 md:min-h-[531px] border-option1-color cursor-default bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 pb-2 pt-4 ">
      <Formik
        initialValues={{ 
          nombre: "",
          correo: "",
          mensaje: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor, ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
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
              "El correo solo puede contener letras, números, puntos, guiones y guión bajo.";
          }

		  //validacion mensaje
          if (!valores.mensaje) {
            errores.mensaje = "Por favor, ingresa un mensaje";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
			axios
			.post(`${import.meta.env.VITE_URL_FORM}`, 
			{
				nombre: valores.nombre, 
				correo: valores.correo,
				mensaje: valores.mensaje,
			}, 
			{ headers: {'Accept': 'application/json'}})
			.catch()
          resetForm();
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
		  
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
          <form 
          className='shadow-xl shadow-gray-400/20'
            action= 'https://getform.io/f/f6e2b985-8fab-4c52-9552-744a7a1b9e16'
            method='POST'
            >
            <h1 className="text-green-900 text-lg mb-1 font-medium title-font text-center">
            ¡Escribínos!
            </h1>
            <p className="leading-relaxed mb-5  text-gray-600">
            No dudes en contactarte por cualquier consulta.
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="nombre"
                className="leading-7 text-sm text-gray-600"
              >
                Nombre Completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full bg-white rounded border border-gray-300 focus:border-secondary-color focus:ring-main-color  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {touched.nombre && errors.nombre && (
                <div className="error text-red-500">{errors.nombre}</div>
              )}
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="correo"
                className="leading-7 text-sm text-gray-600"
              >
                Dirección E-mail
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="correo@correo.com"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full bg-white rounded border border-gray-300 focus:border-secondary-color focus:ring-main-color  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {touched.correo && errors.correo && (
                <div className="error text-red-500">{errors.correo}</div>
              )}
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Mensaje
              </label>
              <textarea
                type="text"
                id="mensaje"
                name="mensaje"
                placeholder="Me gustaría tener más información respecto a los servicios que prestan."
                value={values.mensaje}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full bg-white rounded border border-gray-300 focus:border-secondary-color focus:ring-main-color  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
			  {touched.mensaje && errors.mensaje && (
                <div className="error text-red-500">{errors.mensaje}</div>
              )}
            </div>
            <button
			  type="submit" disabled={Object.values(errors).length ? true :false}
              className={Object.values(errors).length ? "text-white  bg-secondary-color border-0 py-2 px-6 focus:outline-none  rounded select-none cursor-not-allowed text-lg opacity-70"  : "text-white  bg-option1-color border-0 py-2 px-6 focus:outline-none hover:bg-main-color rounded select-none text-lg active:text-dark-color"}
            >
              Enviar
            </button>
            {formularioEnviado && (
              <p className="exito text-secondary-color">Formulario enviado con éxito!</p>
            )}
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Formulario