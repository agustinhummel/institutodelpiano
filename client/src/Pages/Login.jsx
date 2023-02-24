import React from 'react'

const Login = () => {
  return (
    <section>
    <div className="flex overflow-hidden min-h-[calc(100vh-13vh)]  ">
        <div className="flex flex-col justify-center flex-1 px-4  ">
            <div className="w-full max-w-xl mx-auto lg:w-96">
                <div>
                    <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">Instituto DelPiano</h2>
                </div>

                <div className="mt-8">
                    <div className="mt-6">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label for="email" className="block text-sm font-medium text-neutral-600"> Correo Electronico </label>
                                <div className="mt-1">
                                    <input id="email" name="email" type="email" autocomplete="email" required="" placeholder="Tu Correo" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label for="password" className="block text-sm font-medium text-neutral-600"> Contraseña </label>
                                <div className="mt-1">
                                    <input id="password" name="password" type="password" autocomplete="current-password" required="" placeholder="Tu Contraseña" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-dark-color transition duration-500 ease-in-out transform bg-main-color rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Ingresar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Login