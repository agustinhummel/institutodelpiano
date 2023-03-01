import React from 'react';
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';

const Pricing = () => {

    const allService = useSelector((state) => state.services)

  return (
    <section>
  <div className="relative items-center w-full py-8 mx-auto md:px-8 lg:px-12 max-w-7xl font-serif mb-4 ">
    <div className="grid grid-cols-1 gap-12 text-center lg:gap-24 lg:grid-cols-3">
        {allService.map((s, i)=>( 
      <div className='bg-sky-100 rounded-md hover:border-t-4 hover:border-secondary-color' key={i}>
        <div className="p-6 mx-auto">
          {/* <span className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase"> Servicios </span>

          <strong className="flex items-end justify-center mx-auto mt-4 mb-8 text-3xl font-black leading-none text-center text-gray-500 lg:text-4xl">
            
          </strong> */}
          <span className="mx-auto text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl"> {s.name.charAt(0).toUpperCase() + s.name.toLowerCase().slice(1)}</span>
          <p className="mx-auto mt-4 text-base text-gray-500 lading-relaxed">{s.description.charAt(0).toUpperCase() + s.description.toLowerCase().slice(1).slice(0, 100)}</p>
          <div className="m-4">
            <Link to={`services/${s.id}`} className="px-5 py-2 text-base font-medium text-center text-dark-color transition duration-500 ease-in-out transform bg-main-color rounded-xl hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-100">Mas Info</Link>
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