import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {getOneService, getAllServices} from '../Redux/actions';
import Professionals from '../components/Professionals'


const ServiceDetail = () => {

    const service = useSelector(state => state.service)
    const dispatch = useDispatch()
    const {serviceId} = useParams()

    useEffect(() => {
        dispatch(getOneService(serviceId))
        
    },[serviceId])

  return (
        <article className="min-h-[calc(100vh-13vh)] mt-20 px-4 py-24 mx-auto max-w-7xl" >
            <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
                <img src={service.image} className="object-cover w-full h-64 bg-center rounded-lg" alt="Kutty" />
                <h1 className="mt-8 text-3xl font-bold leading-tight text-gray-900 md:text-4xl" >
                {service.name?.toUpperCase()}
                </h1>
                <p className="text-xl font-semibold tracking-wider uppercase text-primary">${service.price}</p>
            </div>
            <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">
                <p>
                {service.description}
                </p>
            </div>
            <div className="flex justify-center">
        <h1 className="px-5 pb-2 my-20 text-3xl font-bold sm:text-4xl text-option1-color border-option1-color title-font border-b-2 ">
            Nuestros Profesionales
        </h1>
      </div>
            <div className="mx-auto text-left px-5 w-fit sm:w-full sm:grid gap-10 sm:grid-cols-2 lg:grid-cols-3" >
                    {
                        service.Professionals?.map((prof, i)=>(
                            <Professionals 
                            key={i}
                            fullName={prof.fullName}
                            avatar={prof.avatar} 
                            phone={prof.phone}
                            serviceName={service.name}
                            />
                            ))
                    }
            </div>
        </article>
        )
}

export default ServiceDetail
