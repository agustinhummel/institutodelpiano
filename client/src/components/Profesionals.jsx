import React from 'react'


const Profesionals = ({fullName, email, avatar, phone}) => {


  return (
    <div class="order-last w-full max-w-screen-sm m-auto mt-12 lg:w-1/4 lg:order-first">
    <div class="p-4 transition duration-500 ease-in-out transform bg-white border rounded-lg">
        <div class="flex py-2 mb-4">
            <img src={avatar} class="w-16 h-16 rounded-full"/>
            <div class="ml-4">
                <p class="text-sm font-medium text-gray-900">{fullName}</p>
                <p class="text-sm text-gray-500">{email}</p>
            </div>
        </div>
        <div>
            <a href="#" class="flex items-center px-6 py-2 mt-auto text-lg text-white transition duration-500 ease-in-out transform bg-blue-600 border border-current rounded hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">{phone}</a>
        </div>
    </div>
</div>
  )
}

export default Profesionals