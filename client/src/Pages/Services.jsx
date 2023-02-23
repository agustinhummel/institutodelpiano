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
    <div>
      {allService?.map((s, i)=>(
        <ItemService key={i}
          id={s.id}
          name={s.name}
          price={s.price}
          description={s.description}
          // image={s.image}
        />
      ) )}
    </div>
  )
}

export default Services