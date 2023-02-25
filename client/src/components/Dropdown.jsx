import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function DropdownComponent({setOpen,open}) {

    const allService = useSelector((state) => state.services)

  


    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="flex items-center w-full text-gray-700 rounded-md hover:text-yellow-300 cursor-pointer duration-500">

                    Servicios

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-2 -mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute w-auto mt-1 origin-top-right bg-sky-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {allService.map((s,i)=>(
                        <Menu.Item key={i}>
                            
                            {({ active }) => (
                                
                                <Link onClick={()=>setOpen(!open)} 
                                to={`services/${s.name}`} className={classNames(
                                    active
                                        ? "bg-sky-300 hover:text-yellow-300"
                                        : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                )}>
                                    {s.name.charAt(0).toUpperCase() + s.name.toLowerCase().slice(1)}
                                </Link>

                            )}
                            
                        </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}