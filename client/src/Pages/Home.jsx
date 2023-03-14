import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Carrusel from '../components/Carrusel';
import ChatBot from '../ChatBot/ChatBot';
import Contactos from '../components/Contactos';
import Pricing from '../components/Pricing';
import { getAllServices } from '../redux/actions';
import Calendario from '../components/Calendario';

export default function Home (){

    let imagesCarrusel = [
        '/image6.jpg',
        '/image6.jpg',
    ]

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllServices())
    }, [])

    return (
        <div className='mt-28 md:mt-32 min-h-[calc(100vh-13vh)]'>
            <div >
                <Carrusel urlsData={imagesCarrusel}  />
            </div>
            <div className='mx-10'> <Pricing/> </div>
            <div className='mx-10'> <Calendario/> </div>
            <div className='mx-10' > <Contactos/> </div>
            <div className='mx-10'> <ChatBot /> </div>
        </div>
    )
}