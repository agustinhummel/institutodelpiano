import React from 'react'

const Footer = () => {
  return (
    <footer className='absolute bottom-0 w-full bg-main-color text-gray-700 font-serif' >
      <div className='md:flex justify-around'>
      <div className='mt-4 ml-8'>
        <div className='flex items-center cursor-pointer hover:text-yellow-300'><ion-icon name="logo-facebook"></ion-icon>Facebook</div>
        <div className='flex items-center cursor-pointer hover:text-yellow-300'><ion-icon name="logo-instagram"></ion-icon>Instagram</div>
        <div className='flex items-center cursor-pointer hover:text-yellow-300'><ion-icon name="mail-outline"></ion-icon>Email</div>
      </div>
      <ul className='mt-4 mb-4 ml-8'>
        <li>Horarios</li>
        <li>Lu a Vi 7:00 a 21:00 hs</li>
        <li>Sa 8:00 a 13:00 hs</li>
      </ul>
      <ul className='mt-4 mb-4 ml-8'>
        <li>Telefono</li>
        <li>0376 442-8578</li>
      </ul>
      <ul className='mt-4 mb-4 ml-8'>
        <li>Direccion</li>
        <li>Av. Mitre 1651, Posadas, Misiones</li>
      </ul>
      </div>
      <div className='flex justify-around w-full mt-2 mb-2' >Copyright - All right reserved © 2023</div>
    </footer>
  )
}

export default Footer