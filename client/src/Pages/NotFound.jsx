import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className="flex items-center h-screen p-16  dark:text-dark-color">
		<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
			<div className="max-w-md text-center">
				<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
					<span className="sr-only">Error</span>404
				</h2>
				<p className="text-2xl font-semibold md:text-3xl">Lo Siento, No hemos podido encontrar esta pagina</p>
				<p className="mt-4 mb-8 dark:text-gray-400">Pero no te preocupes, puedes encontrar muchas otras cosas en nuestro inicio </p>
				<Link to={'/'} className="px-8 py-3 font-semibold rounded bg-main-color text-dark-color">Volver a Inicio</Link>
			</div>
		</div>
	</section>
  )
}

export default NotFoundPage