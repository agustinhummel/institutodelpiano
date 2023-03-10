import React from 'react';
import Formulario from './Formulario';


const Contactos = () => {

  return (
    <div className="w-full min-h-screen md:px-8 sm:pt-10 px-4 pb-10 bg-light-color" id="contacto">
      <section className="text-dark-color body-font relative">
        <div className="flex justify-center">
          <h1 className="px-5 pt-8 pb-2 text-3xl font-bold sm:text-4xl text-option1-color border-option1-color title-font border-b-2 ">
            Contacto
          </h1>
        </div>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative ">
            <iframe
              className="border-2 hover:border-option1-color border-dark-color absolute inset-0 grayscale-[0.3] opacity-[0.5] duration-300 contrast-[1.2] w-full h-full hover:grayscale-[0] hover:opacity-[1] hover:contrast-[1] "
              loading="lazy"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.0221040073384!2d-55.89534218494508!3d-27.375025082930723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457be4b6cfa39ef%3A0x64abeae706c5c909!2sInstituto%20Delpiano!5e0!3m2!1ses-419!2sar!4v1677761302774!5m2!1ses-419!2sar"
            ></iframe>
            <div className="bg-light-color w-full relative flex flex-wrap py-6 rounded shadow-md lg:flex ">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-option1-color tracking-widest text-xs">
                  TELÉFONO
                </h2>
                <p className="mt-1">
                  376 442-8578
                </p>
                <p className="mt-1">
                  376 432-8203
                </p>
              </div>
              <div className="lg:w-1/2 px-4 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-option1-color tracking-widest text-xs">
                  DIRECCIÓN
                </h2>
                <p className="mt-1">
                Av. Mitre 1651, Posadas, Misiones
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-option1-color tracking-widest text-xs mt-4">
                  WHATSAPP
                </h2>
                <p className="leading-relaxed">376 432-8203</p>
              </div>
            </div>
          </div>
          <Formulario></Formulario>
        </div>
      </section>
    </div>
  )
}

export default Contactos