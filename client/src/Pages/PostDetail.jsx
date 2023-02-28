import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {getOnePost, getAllPosts} from '../Redux/actions';


const PostDetail = () => {

    
    const post = useSelector(state => state.post)
    const dispatch = useDispatch();
    const {postId} = useParams()
    
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const dias_semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  
    const fecha = new Date(`${post.createdAt}`);


    useEffect(() => {
        dispatch(getOnePost(postId))
        dispatch(getAllPosts)
    },[])


    return (
        <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 ">
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Party"
                src={post.image}
                className="relative inset-0 w-full mt-16 object-contain overflow-hidden rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
              <h2 className="text-3xl font-bold sm:text-4xl">
              {post.title}
            </h2>
                <p>
                  {post.author}
                </p>
      
                <p>
                  {new DOMParser().parseFromString(post.description, "text/html").body.textContent}
                </p>
                <p className="font-bold">
                    {dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear()}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default PostDetail