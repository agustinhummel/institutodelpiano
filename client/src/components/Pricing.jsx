import React from 'react';
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';

const Pricing = () => {

    const allService = useSelector((state) => state.services)

  return (
    <section>
  <div class="relative items-center w-full py-8 mx-auto md:px-8 lg:px-12 max-w-7xl font-serif  ">
    <div class="grid grid-cols-1 gap-12 text-center lg:gap-24 lg:grid-cols-3">
        {allService.map((s, i)=>( 
      <div className='bg-sky-100 rounded-md hover:border-t-4 hover:border-secondary-color' key={i}>
        <div  class="p-6 mx-auto">
          <span class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase"> Servicios </span>

          <strong class="flex items-end justify-center mx-auto mt-4 mb-8 text-3xl font-black leading-none text-center text-gray-500 lg:text-4xl">
            
          </strong>
          <span class="mx-auto text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl"> {s.name.charAt(0).toUpperCase() + s.name.toLowerCase().slice(1)}</span>
          <p class="mx-auto mt-12 text-base text-gray-500 lading-relaxed">{s.description}</p>
          <div class="mt-6">
            <Link to={`services/${s.name}`} class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Mas Info</Link>
          </div>
        </div>
      </div>
        ))}
    </div>
  </div>
</section>

  )
}

export default Pricing