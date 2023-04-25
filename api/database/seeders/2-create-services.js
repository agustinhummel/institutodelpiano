"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Services",
      [
      {
          name: "trabajadora social",
          description:"En nuestro Instituto nos enfocamos en darte lo mejor para que lleves una mejor calidad de vida. Por eso, contamos con servicio de Trabajo Social, nuestro profesional busca actuar sobre las interacciones de las personas con el entorno. Tiene como objetivo ayudar al desarrollo de relaciones humanas saludables y fomentar los cambios sociales. El trabajador social actúa sobre las causas de problemas estructurales de una comunidad o un grupo social con el objetivo de eliminar el riesgo de que vuelvan a repetirse. Esta clase de acciones se vinculan muchas veces a la labor psicológica.",
          image:["https://i.pinimg.com/564x/f2/c7/ff/f2c7ffca42b7dd5aed09455916c46415.jpg"],
          price: 1500,
          category: ["Acompañamiento escolar", "Atencion de adultos mayores"],
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
      },  
      {
        name: "kinesiologia",
        description:" Kinesiologia (kineesis, movimiento + logia, estudio-tratado-ciencia), Parte de la fisiología que describe y analiza los movimientos y los fenómenos locomotores en cuanto reflejan la acción de fuerzas mecánicas. EL KINESIÓLOGO es un profesional de formación universitaria, integrante del equipo de salud, cuya actuación comprende, a través del estudio y aplicación del movimiento humano en sus aspectos biomecánicas y psicomotor, como también de sus componentes orgánicos, cardiorrespiratorio y neuromuscular, es capaz de establecer normas específicas de prevención, recuperación y/o rehabilitación en individuos sanos o alterados en sus campos de salud, deportes, educación y otros mediante la utilización de técnicas fisiokinesis de evaluación y tratamiento que les son propias. LA POBLACIÓN DEBE CONOCER Y EXIGIR que el único profesional universitario capacitado y autorizado por ley (2166/84) para realizar las prácticas relacionadas con la KInesiología son los KINESIÓLOGOS, FISIOTERAPEUTAS, LICENCIADOS KINESIOLOGOS FISIATRAS, DOCTORES KINESIOLOGOS FISIATRAS.",
        image:["https://res.cloudinary.com/dc0rv28n2/image/upload/v1681760487/Instituto%20Delpiano/Untitled_design_14_k5ldfu.png"],
        price: 1500,
        category: ["Quiropraxia", "Terapias respitatoria", "Terapias manipuladas", "RPG", "Estimulacion temprana"],
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "masaje relajante",
        description:"Siempre es bueno dedicarle un tiempo a recuperar las energías y relajar el cuerpo. ¿Conoces los beneficios? Relaja el cuerpo,  reduce el estrés, aumenta la relajación, la energía y el estado de ánimo.",
        image:["https://www.elespectador.com/resizer/E5oj9e6MhvmMpFXKd01LNL_0rQ8=/525x350/filters:quality(70):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/SW5ANHB43RHZTIAWQPWRCSSATQ.jpg"],
        price: 900,
        category: ["Masaje deportivo", "Masaje tailandés", "Kobido"],
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "hidroterapia",
        description:"La hidroterapia se realiza con profesionales a cargo. Para personas de todas las edades. Dedicado a personas de todas las edades que requieran rehabilitación motriz, reducción de dolores, reeducación de marcha, enfocado en patologías como artritis, artrosis, acv, post quirúrgico, entre otras . Por otro lado, es recomendado también para personas que no tengan patología alguna y lo requieran para hacer actividad física. Te contamos un poco de los beneficios que tiene realizar hidroterapia: Disminuye la ansiedad de separación y establece vínculos de relación e intercambio socio comunicativo (con terapeutas, padres e iguales). Organización de la conducta; Calma los estados de ansiedad y estrés proporcionando seguridad y tranquilidad, pudiendo llegar incluso a mejorar los ciclos de sueño. A nivel muscular; Mejora el tono (relajación) equilibrio y coordinación.",
        image:["https://res.cloudinary.com/dc0rv28n2/image/upload/v1679406293/Instituto%20Delpiano/265971032_130047979433769_2266975901967474414_n_uxx1yl.jpg"],
        price: 2500,
        category: ["Hidroterapia en niños con TEA", "Hidroterapoa en niños con SME Down"],
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "pilates",
        description:"Las mejores profesionales para realizar pilates están en nuestro instituto. Reduce el estrés y tonifica tus músculos. Mejora tu concentración. Te ayuda a dormir mejor Aprendes a respirar mejor. Incentiva la pérdida de peso. Aumenta tu capacidad de movimiento. Corrige y mejora la postura corporal",
        image:["https://res.cloudinary.com/dc0rv28n2/image/upload/v1679945372/Instituto%20Delpiano/pilates_de7igz.png"],
        price: 800,
        category: [""],
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "gimnasio terapeutico",
        description:"Cuando se es joven, hacer actividad física es una buena opción, a partir de los 50 años es una obligación.Contamos con el mejor equipo de profesores para entrenar. Salones: Para realizar gimnasia Aeróbica, etc. . Nuestro equipo de profesionales te acompañará en todo el entrenamiento. Tenemos un amplio gimnasio, equipado para brindarte el mejor servicio. Un completo gimnasio integrado por los siguientes sectores: Equipo: Todas las actividades son supervisadas por profesionales especializados, controlando la presión arterial y la frecuencia cardiaca antes, durante y después de las diferentes actividades físicas que se realizan.",
        image:["https://res.cloudinary.com/dc0rv28n2/image/upload/v1679946255/Instituto%20Delpiano/GYM_gjnqwx.png"],
        price: 850,
        category: ["Gimnasia Aerobica", "Gimasio Complemento"],
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "fonoaudiologia",
        description:"La Fonoaudióloga se encarga de tratar a personas con alteraciones de la audición, el lenguaje, la voz, el sistema vestibular, la motricidad orofacial y la deglución. Atienden a personas de distintas edades, ayudan a establecer las habilidades de comunicación o a perfeccionarlas. Se ocupa de evaluar, diagnosticar e intervenir en los trastornos de la comunicación humana, expresados a través de diferentes patologías como puede ser alteración en la voz en el habla, lenguaje, en la audición y en cualquier Otra función que implique tanto al habla como al oído, tanto de adultos como de niños.",
        image:["https://res.cloudinary.com/dc0rv28n2/image/upload/v1679947802/Instituto%20Delpiano/FONO_uqxlkz.png"],
        price: 3000,
        category: [""],
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "psicopedagogia",
        description:"Evaluación y perfil neurocognitivo. Tratamiento cognitivo conductual -Estimulación y/o rehabilitación de funciones ejecutivas. Tratamiento de dificultades relacionadas al aprendizaje. Atención específica de niños con trastorno del espectroautista. (Tratamiento cognitivo conductual - estimulación cognitiva de alto funcionamiento). Estimulación de habilidades sociales y pensamiento social. Orientación en Ia gestión de emociones.",
        image:["https://res.cloudinary.com/dc0rv28n2/image/upload/v1679948656/Instituto%20Delpiano/PSICOPEDAGOGIA_v3kjw2.png"],
        price: 3500,
        category: [""],
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "Psicologia",
        description:"es una descricion de prueba ",
        image:["https://res.cloudinary.com/dc0rv28n2/image/upload/v1679924298/Instituto%20Delpiano/PSICOLOGIA_2_xylvty.png"],
        price: 3000,
        category: ["Psicología clínica", "Psicología cognitiva"],
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "yoga",
        description:"Siempre es bueno dedicarle un tiempo a recuperar las energías y relajar el cuerpo. ¿Conoces los beneficios? Relaja el cuerpo,  reduce el estrés, aumenta la relajación, la energía y el estado de ánimo.",
        image:["https://res.cloudinary.com/dc0rv28n2/image/upload/v1679949687/Instituto%20Delpiano/yoga_dnqhsw.png"],
        price: 900,
        category: [""],
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Services", null, {});
  },
};
