import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ItemBlog from '../components/ItemBlog';
import { getAllBlog } from '../Redux/Actions/actions';


const Blog = () => {

  const allBlog = useSelector((state) => state.blogs)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!allBlog.length) {
        dispatch(getAllBlog())
    }
  }, [])

  return (
    <div className='bg-light-color relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl' >
    <div className='grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 mt-20' >
      
      {
        allBlog?.map((b,i)=>(
          <ItemBlog key={i}
            id={b.id}
            image={b.image}
            title={b.title}
            description={b.description}
            autor={b.autor}
          />
        ))
      }
    </div>
    </div>
  )
}

export default Blog