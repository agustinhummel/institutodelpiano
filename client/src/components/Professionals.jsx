import React from 'react'


const Professionals = ({fullName, email, avatar, phone, serviceName}) => {


  return (
    <div className="mb-16 order-last w-full max-w-screen-sm m-auto mt-12 lg:w-1/4 lg:order-first">
        <strong className="font-xl">Profesional: </strong>
    <div className="p-4 transition duration-500 ease-in-out transform bg-white border  overflow-hidden rounded-lg shadow-lg">
        <div className="flex py-2 mb-4">
            <img src={avatar} className="w-16 h-16 rounded-full"/>
            <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">{fullName}</p>
                <p className="text-sm text-gray-500">{email}</p>
            </div>
        </div>
        <div >
            <p className='text-sm text-gray-500'>Turnos Online</p>

            <button href={`https://api.whatsapp.com/send?phone=${phone}&text=Hola quisiera reservar un turno de ${serviceName}`} className=" py-2 w-full mt-auto text-lg text-white transition duration-500 ease-in-out transform bg-green-600 border border-current rounded hover:bg-green-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
            <ion-icon name="logo-whatsapp"></ion-icon>
                {phone}
            </button>
 
        </div>
    </div>
</div>

  )
}

export default Professionals

{/* <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
	<img src={avatar} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{fullName}</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-400">{email}</p>
		</div>
		<div className="flex justify-center pt-2  align-center">
            <p className='text-sm text-gray-500'>Turnos Online</p>
            <a href={`https://api.whatsapp.com/send?phone=${phone}&text=Hola quisiera reservar un turno de ${serviceName}`} className="flex items-center px-6 py-2 mt-auto text-lg text-white transition duration-500 ease-in-out transform bg-green-600 border border-current rounded hover:bg-green-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
            <ion-icon name="logo-whatsapp" className='mx-8'></ion-icon>
              {phone}
            </a>

		</div>
	</div>
</div> */}