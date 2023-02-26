import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Post from '../components/Post';
import { getAllPosts } from '../redux/actions';


const Blog = () => {

  const allPosts = useSelector((state) => state.posts)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!allPosts.length) {
        dispatch(getAllPosts())
    }
  }, [])

  return (
    <div className='bg-light-color relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl' >
    <div className='grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 mt-20' >
      
      {
        allPosts?.map((post,i)=>(
          <Post key={i}
            id={post.id}
            image={post.image}
            title={post.title}
            description={post.description}
            author={post.author}
          />
        ))
      }
    </div>
    </div>
  )
}

export default Blog