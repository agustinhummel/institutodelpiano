import React from 'react'

const ItemService = ({image, name, price, description}) => {
  return (
    <section>
  <div className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">
    {/* <img className="aspect-video w-80 rounded-t-2xl object-cover object-center" src={image}/> */}
    <div className="p-6">
      <p className="text-gray-900 text-xs">{name}</p>
      <h1 className="text-2xl font-medium text-gray-700 pb-2">$ {price}</h1>
      <p className="text text-gray-500 leading-6">{description}</p>
    </div>
  </div>
</section>
  )
}

export default ItemService