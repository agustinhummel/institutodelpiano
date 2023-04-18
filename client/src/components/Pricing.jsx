import React from 'react';
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';

const Pricing = () => {

    const allService = useSelector((state) => state.services.sort((a, b) => {
      if (a.id > b.id) {
          return 1;
      }
      if (b.id > a.id) {
          return -1;
      }
      return 0
  }))

  return (
    <section className='text-center justify-center flex '>
  <div className="relative items-center  w-full py-8  md:px-8 lg:px-12 max-w-sm lg:max-w-screen-2xl font-serif mb-4 ">
  <div className="flex justify-center">
          <h1 className="px-5 pt-8 pb-2 text-3xl font-bold sm:text-4xl text-option1-color border-option1-color title-font border-b-2 mb-20">
            Nuestros Servicios
          </h1>
        </div>
    <div className="grid grid-cols-1 gap-12 text-center lg:gap-24 lg:grid-cols-3">
        {allService.map((s, i)=>( 
      <div className='bg-sky-100 rounded-md border-t-4 border-secondary-color shadow-xl shadow-gray-400/20 ' key={i}>
        <div className="p-6 mx-auto h-80 grid ">
          <span className="mx-auto text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl"> {s.name.charAt(0).toUpperCase() + s.name.toLowerCase().slice(1)}</span>
          <p className="mx-auto text-base text-gray-500 lading-relaxed">{s.description.charAt(0).toUpperCase() + s.description.toLowerCase().slice(1).slice(0, 100)}</p>

            <Link to={`services/${s.id}`} className="items-end mx-auto flex justify-center w-36 h-8 pb-1 text-base font-medium text-center text-dark-color transition duration-500 ease-in-out transform bg-secondary-color rounded-xl hover:bg-[#f6ff00c9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-100">Mas Info</Link>

        </div>
      </div>
        ))}
    </div>
  </div>
</section>


  )
}

export default Pricing