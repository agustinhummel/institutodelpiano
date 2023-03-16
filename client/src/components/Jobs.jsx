import React from "react";

const Jobs = ({name, description}) => {

    return (
            <div  className="flex ">
                <div className="max-w-5xl mx-auto w-full p-4">
                    <div className="border border-gray-200 p-6 rounded-lg shadow">
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)}</h2>
                        <p className="leading-relaxed text-base">{new DOMParser().parseFromString(description, "text/html").body.textContent}</p>
                    </div>
                </div>
            </div>
    )
}

export default Jobs