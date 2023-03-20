import React from 'react'
import {WhatsAppOutlined} from '@ant-design/icons'

const Professionals = ({fullName, email, avatar, phone, serviceName}) => {


  return (
    <div className="mb-16 order-last w-full max-w-screen-sm m-auto mt-12 lg:w-80 lg:order-first">
      <div className="p-4 transition  duration-500 ease-in-out transform bg-white border  overflow-hidden rounded-lg shadow-lg">
          <div className="flex py-2 mb-4">
              <img src={avatar} className="w-16 h-16 rounded-full"/>
              <p className="m-auto text-sm font-medium text-gray-900">{fullName}</p>
          </div>
           <div className='flex mx-auto w-border border-current rounded hover:bg-green-700 w-min pb-2 sm:w-fit sm:pr-3  text-white bg-green-500  text-lg'>
                <a target='_blank' href={`https://api.whatsapp.com/send?phone=${phone}&text=Hola quisiera reservar un turno de ${serviceName}`} className="flex" >
                <WhatsAppOutlined style={{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px"}} /><p className='pt-1 hidden sm:flex'>Turnos Online</p>
                </a>
          </div>
        </div>
    </div>

  )
}

export default Professionals

