import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Carrusel from '../components/Carrusel';
import ChatBot from '../ChatBot/ChatBot';
import Contactos from '../components/Contactos';
import Pricing from '../components/Pricing';
import { getAllServices } from '../redux/actions';
import Calendario from '../components/Calendario';
import Instagram from '../components/Instagram';

export default function Home (){

    let imagesCarrusel = [
        'https://res.cloudinary.com/dc0rv28n2/image/upload/v1682552677/Instituto%20Delpiano/CARRUSEL_cchhdz.png',
        'https://res.cloudinary.com/dvgjiwp7h/image/upload/v1682641879/Instituto%20Delpiano/carrusel_1_d3jocg.png',
        'https://res.cloudinary.com/dvgjiwp7h/image/upload/v1682642143/Instituto%20Delpiano/carrusel2_kjnfri.png',
        'https://res.cloudinary.com/dc0rv28n2/image/upload/v1679954576/Instituto%20Delpiano/Untitled_design_13_mowno0.png'
    ]

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllServices())
    }, [])

    return (
        <div className='mt-28 md:mt-32 min-h-[calc(100vh-13vh)]'>
            <div className='text-center justify-center flex' ><Carrusel urlsData={imagesCarrusel} 
                        styles={{
                            container: "max-w-screen-2xl h-[200px] md:h-full flex overflow-hidden relative rounded-md",
                            slice: "md:aspect-[1/1] w-screen h-full md:h-[250px] lg:h-[400px] lg:w-[1250px] bg-cover bg-no-repeat flex justify-center text-center items-center ",
                                }}/>
            </div>
            <div className='mx-10'><Pricing/></div>
            <div className='mx-10'><Calendario/></div>

            {/* <div className='mx-10'><ChatBot/></div> */}
            <div className="mx-10"><Instagram/></div>
            <div className='mx-10'><Contactos/></div>
        </div>
    )
}