import React from 'react'

const Footer = () => {
  return (
    <footer className='z-20 w-full min-h-[39vh] md:min-h-[13vh]  bg-options-color text-option1-color font-serif' >
      <div className='md:flex justify-around pt-[1px]'>
      <div className='mt-4 ml-8'>
        <div className='flex items-center cursor-pointer hover:text-sky-200'><ion-icon name="logo-facebook"></ion-icon>Facebook</div>
        <div className='flex items-center cursor-pointer hover:text-sky-200'><ion-icon name="logo-instagram"></ion-icon>Instagram</div>
        <div className='flex items-center cursor-pointer hover:text-sky-200'><ion-icon name="mail-outline"></ion-icon>Email</div>
      </div>
      <ul className='mt-4 mb-4 ml-8'>
        <li>Horarios</li>
        <li>Lu a Vi 7:00 a 21:00 hs</li>
        <li>Sa 8:00 a 12:00 hs</li>
      </ul>
      <ul className='mt-4 mb-4 ml-8'>
        <li>Contacto</li>
        <li>442-8578</li>
        <li>376 432-8203</li>
        <li>376 436-3773</li>
        <li>administracion@institutodelpiano.com.ar</li>
      </ul>
      <ul className='mt-4 mb-4 ml-8'>
        <li>Direccion</li>
        <li>Av. Mitre 1651, Posadas, Misiones</li>
      </ul>
      </div>
      <div className='flex justify-around w-full bg-secondary-color ' >
        <a href='https://www.linkedin.com/in/agustin-hummel-1aba96213/' >Agustin Hummel</a>
        <p>Copyright - All right reserved © 2023</p>
        <a href='https://www.linkedin.com/in/miguelbel00/' >Miguel Beltran</a>
      </div>
    </footer>
  )
}

export default Footer