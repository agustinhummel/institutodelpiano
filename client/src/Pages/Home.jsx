import React from 'react';
import Carrusel from '../components/Carrusel';


export default function Home (){

    let imagesCarrusel = [
        '/image6.jpg',
        '/image6.jpg',
        '/image6.jpg',
    ]


    return (
        
        <div className='container mx-auto mt-20 bg-light-color'>
            <div>
                <Carrusel urlsData={imagesCarrusel}  />
            </div>
            <div className='w-full h-96'>HOLA MUNDO </div>

        </div>
    )
}