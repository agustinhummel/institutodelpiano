import React,{useState,useEffect} from 'react'
import Carrusel from './Carrusel';
import axios from 'axios';
const Instagram = () => {

    const [posts, setPosts] = useState([]);
    const fields =
    "id,media_count,media_type,permalink,media_url,caption,children{media_type,media_url,permalink}";


     async function getInstaFeed() {
/*       
 */        const { data } = await axios.get(
          `https://graph.instagram.com/me/media?access_token=${import.meta.env.VITE_INSTAGRAM_TOKEN}&fields=${fields}&limit=6`
        );
        setPosts(data.data);
      }

    useEffect(() => {
        getInstaFeed();
    }, [])

  return (
    <div className='mx-auto max-w-screen-2xl '>
      <div className="flex justify-center pb-8">
        <h1 className="px-5 pb-2 text-3xl font-bold sm:text-4xl text-option1-color border-option1-color title-font border-b-2 ">
          Nuestro Instagram
        </h1>
      </div>
      <div className='select-none px-5 w-2/3 xl:w-[1200px] pb-24 pt-10 mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
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

export default Instagram

