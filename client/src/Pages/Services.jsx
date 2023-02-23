import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import ItemService from '../components/ItemService';
import { getAllService } from '../Redux/Actions/actions';

const Services = () => {

  
  const allService = useSelector((state) => state.services)

  const dispatch = useDispatch()

  useEffect(() => {

    if (!allService.length) {
        dispatch(getAllService())
    }
}, [])
  return (
    <div className='bg-light-color relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl'>
      <div className='grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 mt-20'>
      {allService?.map((s, i)=>(
        <ItemService  key={i}
          id={s.id}
          name={s.name.charAt(0).toUpperCase() + s.name.toLowerCase().slice(1)}
          price={s.price}
          description={s.description}
          image={s.image}
        />
      ) )}
      </div>
    </div>
  )
}

export default Services