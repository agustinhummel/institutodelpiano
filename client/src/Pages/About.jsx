import React from 'react'
import logo from '../assets/logoDelpiano.jpg';

const About = () => {
  return (
    <div class="mt-20 w-full px-5 py-24 mx-auto lg:px-32">
    <div class="flex flex-col w-full mx-auto mb-2 prose text-left prose-md">
        <div class="mb-5 border-b border-gray-200">
            <div class="flex flex-wrap items-baseline mt-2">
                <h5 className='font-serif'>12-03-2021</h5>
                <p class="font-serif mt-1 ml-2">Transitions</p>
            </div>
        <img src={logo} />
        <h1 className='font-serif text-4xl text-bold m-3 flex justify-center'>INTITUTO DELPIANO</h1>
        <p className='font-serif text-2xl m-3 flex justify-center'>"Rehabilitacion-Entrenamiento-Actividad Fisica Controlada"</p>
        <p className='font-serif text-xl'>El Instituto Delpiano, es un centro especializado en Rehabilitación Kinesiológica, que busca aplicar de forma integrada, una serie de procedimientos para lograr que las personas recuperen su salud Física, sin olvidar las Psíquica y Espiritual.
Para tal fin el Instituto Delpiano, busca personalizar sus servicios, brindando a cada persona un tratamiento específico y a medida establecido en función de tres elementos claves: la patología identificada, el nivel de complejidad manifiesta, y el perfil específico del paciente. 

Como parte del paquete integral de servicios, el Instituto brinda capacitación a las personas que tienen a su cargo el cuidado y la atención domiciliaria del paciente, que combinado con la realización de un seguimiento minucioso de la evolución y respuesta del paciente en cada una de las etapas del tratamiento, se logra alcanzar un elevado nivel de eficiencia y eficacia, lo que permite reducir considerablemente los tiempos requeridos para la rehabilitación total del paciente. Esto genera un ahorro de tiempo y dinero, pero por sobre todas la cosas, permite que los pacientes reestablezcan sus capacidades en un menor lapso de tiempo. 

En este Instituto, los pacientes son atendidos por profesionales capacitados humana y científicamente, en áreas relacionadas con la salud, como ser: Kinesiología, Kinefilaxia, Educación Física, RPG, Hidroterapia, Osteopatía; según los requerimientos de cada una de las patologías tratadas.
</p>
        <h1 className='font-serif text-3xl text-bold m-3'>El Instituto busca aplicar y combinar dichas áreas en un trabajo Inter y Transdisciplinario aplicado a la rehabilitación de las siguientes patologías y secuelas:</h1>
        <li className='font-serif text-xl'>Neurológicas: Sistema Nervioso central: Grandes síndromes neurológicos; enfermedades y lesiones de la médula espinal, lesiones cerebrales, etc. –Afecciones neurológicas periféricas: lesiones del asta anterior, polineuritis y polirradiculitis; lesiones de los plexos, etc.; -Afecciones diversas y sus complicaciones: rodilla paralítica, pié espástico, tronco paralítico, etc.</li>
        <li className='font-serif text-xl'>Traumatológicas y ortopédicas: contusiones, fracturas, distensiones, alteraciones de la columna vertebral, artroplastías, amputaciones,  politraumatizados etc., otras en relación.</li>
        <li className='font-serif text-xl'>Deportológicas: todas las patologías relacionadas con el deporte, pre y posquirúrgico. Charlas para el conocimiento preventivo y actualización.</li>
        <li className='font-serif text-xl'>Deportológicas: todas las patologías relacionadas con el deporte, pre y posquirúrgico. Charlas para el conocimiento preventivo y actualización.</li>
        <h3 className='font-serif text-2xl  m-2'>Is a no-brainer, or Q1 regroup.</h3>
        <p className='font-serif text-xl'>Gain traction make it more corporate please we need to harvest synergy effects not enough bandwidth, and we want to empower the team with the right tools and guidance to uplevel our craft and build better nor low-hanging fruit the right info at the right time to the right people.</p>
        </div>
    </div>
</div>

  )
}

export default About