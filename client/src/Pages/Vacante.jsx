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
        <section className="text-gray-600 body-font mt-20">
        <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Puestos de trabajo disponibles</h1>
            </div>
            { allVacantes.length > 0 
                ?
                allVacantes?.map((v, i)=> (
                    <Jobs
                        key={i}
                        name={v.name}
                        description={v.description}
                    />
                ))
                :   <div  className="flex">
                        <div className="w-fit justify-center mx-auto p-4">
                            <div className="border border-gray-200 p-6 rounded-lg shadow">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">Proximamente estaremos publicando mas vacantes</h2>
                            </div>
                        </div>
                    </div>
            }
        </div>
        <form 
            action='https://getform.io/f/b4d087b5-7412-49c6-a1e7-c7702265e1e0'
            method='POST'
            encType="multipart/form-data"
            >
        <div className="text-gray-600 body-font relative border-2  md:max-w-2xl lg:max-w-5xl md:mx-auto my-10 pt-8">
            <div className="container px-5 pb-20 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contactate con nosotros</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Si quieres sumarte a nuestro equipo de trabajo, no dudes en dejarnos tu informacion.</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label for="nombre" className="leading-7 text-sm text-gray-600">Nombre</label>
                                <input type="text" id="nombre" name="nombre" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label for="correo" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="correo" name="correo" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label for="message" className="leading-7 text-sm text-gray-600">Presentacion</label>
                                <textarea id="mensaje" name="mensaje" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label for="vacante" className="leading-7 text-sm text-gray-600">Vacante a la que aplicas</label>
                                <input type="text" id="vacante" name="vacante" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label for="cv" className="leading-7 text-sm text-gray-600">CV</label>
                                <input type="file" id="cv" name="cv" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</button>
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