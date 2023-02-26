import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Carrusel from '../components/Carrusel';
import Pricing from '../components/Pricing';
import { getAllServices } from '../redux/actions';

export default function Home (){

    let imagesCarrusel = [
        '/image6.jpg',
        '/image6.jpg',
        '/image6.jpg',
    ]

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllServices())
    }, [])

    return (
        
        <div className='mx-10 mt-20 bg-light-color'>
            <div>
                <Carrusel urlsData={imagesCarrusel}  />
            </div>
            <div className='w-full'> <Pricing/> </div>

        </div>
    )
}