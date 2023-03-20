import React, { Fragment} from "react";
import { Menu, Transition } from "@headlessui/react";
import {useSelector} from 'react-redux';


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function DropdownService({setOpen,open}) {

    const allService = useSelector(state => state.service)


    return (
        <Menu as="div" className="lg:relative inline-block text-left">
            <div>
                <Menu.Button className="flex items-center w-full bg-option1-color p-2 text-white rounded-md hover:text-sky-200 cursor-pointer duration-500">

                    Sub Categoria

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
                <Menu.Items className="absolute w-auto mt-1 origin-top-right bg-option1-color text-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {allService.category?.map((s,i)=>(
                        <Menu.Item key={i}>
                            
                            {({ active }) => (
                                
                                <p onClick={()=>{setOpen(!open); }}
                                 className={classNames(
                                    active
                                        ? "bg-option1-color hover:text-sky-200"
                                        : "text-white",
                                    "block px-4 py-2 text-sm"
                                )}>
                                    {s.charAt(0).toUpperCase() + s.toLowerCase().slice(1)}
                                </p>

                            )}
                            
                        </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}