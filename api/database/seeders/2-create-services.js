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
        description:"Te brindamos el mejor servicio en Kinesiología y fisioterapia con los mejores profesionales a tu disposición! Fisioterapia, kinesiología. Los profesionales utilizan aparatos como campos magnéticos, onda corta, ultrasonido combinado con técnicas manuales de movilización, estiramientos y masajes.",
        image:["https://res.cloudinary.com/dc0rv28n2/image/upload/v1679413397/Instituto%20Delpiano/Untitled_design_3_ylkyde.png"],
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
        image:["https://www.feda.net/wp-content/uploads/2016/12/pilates-reformer.jpg"],
        price: 800,
        category: [""],
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "gimnasio terapeutico",
        description:"Contamos con el mejor equipo de profesores para entrenar. Salones: Para realizar gimnasia Aeróbica, etc. CONSTANCIA = C ONTROLA TU MENTE,  O LVIDA TUS LÍMITES, N UTRE TU CUERPO, S IENTE TU FORTALEZA, T OMA EL RIESGO, A LCANZA TUS METAS, N OQUEA TUS MIEDOS, C ULTIVA HABITOS, I GNORA LO NEGATIVO, A SUMES EL RETO ?. Nuestro equipo de profesionales te acompañará en todo el entrenamiento. Tenemos un amplio gimnasio, equipado para brindarte el mejor servicio. Un completo gimnasio integrado por los siguientes sectores: Equipo: Todas las actividades son supervisadas por profesionales especializados, controlando la presión arterial y la frecuencia cardiaca antes, durante y después de las diferentes actividades físicas que se realizan.",
        image:["urltest"],
        price: 850,
        category: ["Gimnasia Aerobica", "Gimasio Complemento"],
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "fonoaudiologia",
        description:"La Fonoaudióloga se encarga de tratar a personas con alteraciones de la audición, el lenguaje, la voz, el sistema vestibular, la motricidad orofacial y la deglución. Atienden a personas de distintas edades, ayudan a establecer las habilidades de comunicación o a perfeccionarlas. Se ocupa de evaluar, diagnosticar e intervenir en los trastornos de la comunicación humana, expresados a través de diferentes patologías como puede ser alteración en la voz en el habla, lenguaje, en la audición y en cualquier Otra función que implique tanto al habla como al oído, tanto de adultos como de niños.",
        image:["https://res.cloudinary.com/dc0rv28n2/image/upload/v1679406788/Instituto%20Delpiano/Untitled_design_ctwbhd.png"],
        price: 3000,
        category: [""],
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "psicopedagogia",
        description:"Contamos con un excelente equipo psicopedagógico que ofrece un servicio integral teniendo en cuenta las necesidades del menor y su familia. Evaluación y perfil neurocognitivo. Tratamiento cognitivo conductual -Estimulación y/o rehabilitación de funciones ejecutivas. Tratamiento de dificultades relacionadas al aprendizaje. Atención específica de niños con trastorno del espectroautista. (Tratamiento cognitivo conductual - estimulación cognitiva de alto funcionamiento). Estimulación de habilidades sociales y pensamiento social. Orientación en Ia gestión de emociones",
        image:["https://iberomty.mx/wp-content/uploads/2022/05/img_6272df5ceb31f.jpg"],
        price: 3500,
        category: [""],
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        name: "Psicologia",
        description:"es una descricion de prueba ",
        image:["urltest"],
        price: 0.1,
        category: ["Psicología clínica", "Psicología cognitiva"],
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
