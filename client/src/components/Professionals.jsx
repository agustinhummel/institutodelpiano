import React from 'react'


const Professionals = ({fullName, email, avatar, phone, serviceName}) => {


  return (
    <div class="mb-16 order-last w-full max-w-screen-sm m-auto mt-12 lg:w-1/4 lg:order-first">
        <strong class="font-xl">Profesional: </strong>
    <div class="p-4 transition duration-500 ease-in-out transform bg-white border rounded-lg">
        <div class="flex py-2 mb-4">
            <img src={avatar} class="w-16 h-16 rounded-full"/>
            <div class="ml-4">
                <p class="text-sm font-medium text-gray-900">{fullName}</p>
                <p class="text-sm text-gray-500">{email}</p>
            </div>
        </div>
        <div>
            <p className='text-sm text-gray-500'>Turnos Online</p>
            <a href={`https://api.whatsapp.com/send?phone=${phone}&text=Hola quisiera reservar un turno de ${serviceName}`} class="flex items-center px-6 py-2 mt-auto text-lg text-white transition duration-500 ease-in-out transform bg-green-600 border border-current rounded hover:bg-green-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
            <ion-icon name="logo-whatsapp" className='mx-8'></ion-icon>
                {phone}
            </a>
        </div>
    </div>
</div>
  )
}

export default Professionals