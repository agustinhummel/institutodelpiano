"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
        title: "Feliz dia del profesor",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image:["https://pbs.twimg.com/media/DnRJNGHX0AE8051?format=jpg&name=medium"],
        author: 'autor1',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        title: "Feliz dia del traumatologo",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image:["https://media.licdn.com/dms/image/C4D22AQGqh44OZi6gAQ/feedshare-shrink_800/0/1652015902791?e=1680739200&v=beta&t=GbjGKdFC2V3mIRvFJ67pZj2IQPT-k5AdBMaVBDP06CM"],
        author: 'autor2',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        title: "Feliz dia del psicologo",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image:["https://1.bp.blogspot.com/-U76BGvXHCI4/X7fgF54PgXI/AAAAAAAAKO4/dScCuXtXMrEgkDZodITWaIXOgXRvksfSgCLcBGAsYHQ/s1350/Di%25CC%2581a-del-psico%25CC%2581logo.jpg"],
        author: 'autor3',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },      
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Posts", null, {});
  },
};
