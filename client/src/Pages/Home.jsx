import React, {useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';
import Carrusel from '../components/Carrusel';
import ChatBot from '../ChatBot/ChatBot';
import Contactos from '../components/Contactos';
import Pricing from '../components/Pricing';
import { getAllServices } from '../redux/actions';
import axios from 'axios'

export default function Home (){

    let imagesCarrusel = [
        '/image6.jpg',
        '/image6.jpg',
    ]

    const dispatch = useDispatch();

    const [posts, setPosts] = useState([]);
    const fields =
    "id,media_count,media_type,permalink,media_url,caption,children{media_type,media_url,permalink}";

    async function getInstaFeed() {
        const { data } = await axios.get(
          `https://graph.instagram.com/me/media?access_token=IGQVJXNnJ0dkNLWEdmNFJXbmowc09aeHNOOVFROFQzbGplb2RsLUVDbnlmY2o3aUtwUk5KYUxGTHB4UEQ1UHFzSU5yYkJYLUdLX0hUdE4zOExoeHhjblJNX0lsd3hsRGJSOFJwbjF0Qi00SUU5S3lBYwZDZD&fields=${fields}&limit=6`
        );
        setPosts(data.data);
      }
    

    useEffect(() => {
        dispatch(getAllServices())
        getInstaFeed();
    }, [])

    return (
        <div className='mt-28 md:mt-32 min-h-[calc(100vh-13vh)]'>
            <div >
                <Carrusel urlsData={imagesCarrusel}  />
            </div>
            <div className='mx-10'> <Pricing/> </div>
            <div className='mx-10' > <Contactos/> </div>
            <div className='mx-10'> <ChatBot /> </div>
            <div className="select-none px-5 w-2/3 pb-24 pt-10 mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {posts.map((post, index) => (
          <div key={post.id}>
            {post.media_type === "VIDEO" ? (
              <div className="">
                <video controls className="md:aspect-[1/1] aspect-[4/5] lg:h-[300px] md:h-[275px] h-[260px] md:w-auto  w-[200px] shadow-md shadow-[#040c16] group rounded-md mx-auto mb-10">
                  <source src={post.media_url} />
                </video>
              </div>
            ) : post.media_type === "IMAGE" ? (
              <div
                key={index}
                style={{ backgroundImage: `url(${post.media_url})` }} 
                className="md:aspect-[1/1] aspect-[4/5] lg:h-[300px] md:h-[275px] h-[260px] md:w-auto w-[200px] bg-cover bg-no-repeat shadow-md shadow-[#040c16] group rounded-md flex justify-center text-center items-center mx-auto mb-10"
              >
                <div className="w-full h-full px-10 py-10 opacity-0 group-hover:opacity-80 hover:bg-black hover:rounded-md">
                  <p className="text-white h-full text-ellipsis overflow-hidden">
                    {post.caption}
                  </p>
                  <a
                    className="mt-3 font-semibold text-green-400 hover:underline inline-flex items-center"
                    href={post.permalink}
                    target="_blank"
                  >
                    Ver post
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2 hover:scale-50"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ) : (
              <div className="md:aspect-[1/1] aspect-[4/5] lg:h-[300px] md:h-[275px] h-[260px] shadow-md shadow-[#040c16]  rounded-md mx-auto mb-10">
                <Carrusel
                  urlsData={post.children.data.map((image) => image.media_url)}
                  styles={{
                    container: "md:aspect-[1/1] aspect-[4/5] lg:h-[300px] md:h-[275px] h-[260px] flex overflow-hidden relative rounded-md",
                    slice: "md:aspect-[1/1] aspect-[4/5] lg:h-[300px] md:h-[275px] h-[260px] bg-cover bg-no-repeat flex justify-center text-center items-center ",
                  }}
                ></Carrusel>
              </div>
            )}
          </div>
        ))}
            </div>
        </div>
    )
}