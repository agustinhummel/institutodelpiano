import React from 'react'
import { Link } from 'react-router-dom';


const Post = ({id, title, description, image, author, created}) => {

  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  const dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  const fecha = new Date(`${created}`);


  return (
    <section>
  <div className="mx-auto flex w-80 flex-col justify-center font-serif bg-white rounded-2xl shadow-xl shadow-gray-400/20">
    <img className="aspect-video w-80 rounded-t-2xl object-cover object-center" src={image}/>
    <div className="p-6">
      <h1 className="text-xl font-medium text-gray-700 pb-2">{title}</h1>
      <p className="text text-gray-500 leading-6">Publicado {dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear()}</p>
      <h2 className="text-gray-900 text-s">{author.charAt(0).toUpperCase() + author.toLowerCase().slice(1)}</h2>
      <p className="text text-gray-500 leading-6">{new DOMParser().parseFromString(description.slice(0, 100), "text/html").body.textContent}</p>
      <Link to={`${id}`}>
      <button class="px-5 py-2 text-base font-medium text-center text-black transition duration-500 ease-in-out transform bg-sky-300 lg:px-10 rounded-xl hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Leer mas</button>
        </Link>
    </div>
  </div>
</section>
  )
}

export default Post