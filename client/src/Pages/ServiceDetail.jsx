import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {getOneService, getAllServices} from '../Redux/actions';
import Professionals from '../components/Professionals';
import DropdownService from "../components/DropdownService";


const ServiceDetail = () => {

    const service = useSelector(state => state.service)
    let [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const {serviceId} = useParams()

    useEffect(() => {
        dispatch(getOneService(serviceId))
        
    },[serviceId])

  return (
        <article className="min-h-[calc(100vh-13vh)] mt-20 px-4 py-24 mx-auto max-w-7x" >
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-2">
            <div className="grid justify-items-end">
                {/* <article className="space-y-4 text-gray-600">
                    <DropdownService setOpen={setOpen} open={open}/>
                </article> */}
            </div>
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold sm:text-4xl text-option1-color">
                        {service.name?.toUpperCase()}
                    </h2>

                    <p className="text-xl font-semibold tracking-wider uppercase text-primary">${service.price}</p>
                </div>
                
                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    
                    <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                        <img
                        alt="Party"
                        src={service.image}
                        className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-16">

                        <article className="space-y-4 text-gray-600">
                            <p>
                                {service.description}
                            </p>
                        </article>
                    </div>
                    <article className="space-y-4 text-gray-600">
                        <DropdownService setOpen={setOpen} open={open}/>
                    </article>
                    

                </div>
            </div>
            <div className="flex justify-center">
                <h1 className="px-5 pb-2 my-20 text-3xl font-bold sm:text-4xl text-option1-color border-option1-color title-font border-b-2 ">
                    Nuestros Profesionales
                </h1>
            </div>
            <div className="mx-auto  max-w-screen-xl text-left px-5 w-fit sm:w-full sm:grid gap-10 sm:grid-cols-2 lg:grid-cols-3" >
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
