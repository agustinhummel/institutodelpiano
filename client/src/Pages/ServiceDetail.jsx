import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {getOneService} from '../Redux/actions';
import Professionals from '../components/Professionals'


const ServiceDetail = () => {

    const service = useSelector(state => state.service)
    const dispatch = useDispatch()
    const {serviceId} = useParams()

    useEffect(() => {
        dispatch(getOneService(serviceId))
    },[])

  return (
        <div className="min-h-[calc(100vh-13vh)] mt-32 md:mx-40 bg-blue-100 shadow-xl rounded-xl">
            <div class="block">
                <img
                    alt="Signage"
                    src={service.image}
                    class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-contain sm:h-64 lg:h-72 "
                />
                <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                    <strong class="text-2xl">{service.name?.toUpperCase()}</strong>

                    <span class="mt-1 hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                    <p class="text-xl mt-1 opacity-50 sm:mt-0">${service.price}</p>
                </div>
                <div className="flex flex-col items-center w-full mt-2 mb-2 prose text-left prose-md">
                    <p class="font-medium text-justify mx-2">{service.description}</p>

                </div>
            </div>
            <div>
                {
                    service.Professionals?.map((prof, i)=>(
                        <Professionals 
                            key={i}
                            fullName={prof.fullName}
                            email={prof.email}
                            avatar={prof.avatar} 
                            phone={prof.phone}
                            serviceName={service.name}
                        />
                    ))
                }
            </div>
        </div>
  )
}

export default ServiceDetail