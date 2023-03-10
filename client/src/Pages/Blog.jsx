import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Post from '../components/Post';
import { getAllPosts } from '../redux/actions';


const Blog = () => {

  const allPosts = useSelector((state) => state.posts)

  const dispatch = useDispatch()

  useEffect(() => {
   
        dispatch(getAllPosts())

  }, [])

  return (
    <div className=' relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl min-h-[calc(100vh-13vh)]' >
      <div className="flex justify-center">
        <h1 className="px-5 pb-2 my-20 text-3xl font-bold sm:text-4xl text-option1-color border-option1-color title-font border-b-2 ">
            Nuestros Publicaciones
        </h1>
      </div>
      <div className='grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 ' >
        {
          allPosts?.map((post,i)=>(
            <Post key={i}
              id={post.id}
              image={post.image}
              title={post.title}
              description={post.description}
              author={post.author}
              created={post.createdAt}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Blog