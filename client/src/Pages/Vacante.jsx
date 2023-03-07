import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOpenings } from '../redux/actions';
import Jobs from "../components/Jobs";

const Vacante = () => {

    const allVacantes = useSelector((state)=> state.openings)
    const dispatch = useDispatch()

    useEffect(() => {
     
          dispatch(getAllOpenings())
  
    }, [])

    return (
        <section class="text-gray-600 body-font mt-20">
        <div class="container px-5 py-16 mx-auto">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Puestos de trabajo disponibles</h1>
            </div>
            {
                allVacantes?.map((v, i)=> (
                    <Jobs
                        key={i}
                        name={v.name}
                        description={v.description}
                    />
                ))
            }
        </div>
        <form 
            action='https://getform.io/f/b4d087b5-7412-49c6-a1e7-c7702265e1e0'
            method='POST'
            encType="multipart/form-data"
            >
        <div className="text-gray-600 body-font relative">
            <div class="container px-5 pb-20 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contactate con nosotros</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Si quieres sumarte a nuestro equipo de trabajo, no dudes en dejarnos tu informacion.</p>
                </div>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                <div class="flex flex-wrap -m-2">
                    <div class="p-2 w-1/2">
                    <div class="relative">
                        <label for="nombre" class="leading-7 text-sm text-gray-600">Nombre</label>
                        <input type="text" id="nombre" name="nombre" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    </div>
                    <div class="p-2 w-1/2">
                    <div class="relative">
                        <label for="correo" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="correo" name="correo" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    </div>
                    <div class="p-2 w-full">
                    <div class="relative">
                        <label for="message" class="leading-7 text-sm text-gray-600">Presentacion</label>
                        <textarea id="mensaje" name="mensaje" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    </div>
                    <div class="p-2 w-full">
                    <div class="relative">
                        <label for="vacante" class="leading-7 text-sm text-gray-600">Vacante a la que aplicas</label>
                        <input type="text" id="vacante" name="vacante" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    </div>
                    <div class="p-2 w-full">
                    <div class="relative">
                        <label for="cv" class="leading-7 text-sm text-gray-600">CV</label>
                        <input type="file" id="cv" name="cv" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    </div>
                    <div class="p-2 w-full">
                    <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</button>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
        </form>
        </section>
        
    )
}

export default Vacante;