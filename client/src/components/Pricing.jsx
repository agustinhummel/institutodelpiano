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
// {/* <section class="text-gray-600 body-font">
//       {allService.map((s, i)=>( 
//   <div class="container px-5 py-24 mx-auto" key={i}>
//     <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
//       <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
//         <ion-icon class="sm:w-16 sm:h-16 w-10 h-10" name="barbell-outline"></ion-icon>
//       </div>
//       <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
//         <h2 class="text-gray-900 text-lg title-font font-medium mb-2"> {s.name.charAt(0).toUpperCase() + s.name.toLowerCase().slice(1)}</h2>
//         <p class="leading-relaxed text-base">{s.description.charAt(0).toUpperCase() + s.description.toLowerCase().slice(1).slice(0, 100)}</p>
//         <Link to={`services/${s.id}`}  class="mt-3 text-indigo-500 inline-flex items-center">Learn More
//           <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
//             <path d="M5 12h14M12 5l7 7-7 7"></path>
//           </svg>
//         </Link>
//       </div>
//     </div>
//     <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
//       <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
//         <h2 class="text-gray-900 text-lg title-font font-medium mb-2"> {s.name.charAt(0).toUpperCase() + s.name.toLowerCase().slice(1)}</h2>
//         <p class="leading-relaxed text-base">{s.description.charAt(0).toUpperCase() + s.description.toLowerCase().slice(1).slice(0, 100)}</p>
//         <Link to={`services/${s.id}`} class="mt-3 text-indigo-500 inline-flex items-center">Learn More
//           <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
//             <path d="M5 12h14M12 5l7 7-7 7"></path>
//           </svg>
//         </Link>
//       </div>
//       <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
//         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
//           <circle cx="6" cy="6" r="3"></circle>
//           <circle cx="6" cy="18" r="3"></circle>
//           <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
//         </svg>
//       </div>
//     </div>
//     <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
//       <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
//         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
//           <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
//           <circle cx="12" cy="7" r="4"></circle>
//         </svg>
//       </div>
//       <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
//         <h2 class="text-gray-900 text-lg title-font font-medium mb-2"> {s.name.charAt(0).toUpperCase() + s.name.toLowerCase().slice(1)}</h2>
//         <p class="leading-relaxed text-base">{s.description.charAt(0).toUpperCase() + s.description.toLowerCase().slice(1).slice(0, 100)}</p>
//         <Link to={`services/${s.id}`} class="mt-3 text-indigo-500 inline-flex items-center">Learn More
//           <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
//             <path d="M5 12h14M12 5l7 7-7 7"></path>
//           </svg>
//         </Link>
//       </div>
//     </div>
//   </div>
//       ))}
// </section> */}

  )
}

export default Pricing