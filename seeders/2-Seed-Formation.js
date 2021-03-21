'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Formations', [{
      name: 'Curso de Microsoft Office',
      description: 'Curso de formação pacote Microsoft Office.',
      duration: '22hs',
      image: 'não possui',
      tag: 'técnico curta duração informática basico office escritório',
      id_type_formation: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Formations', [{
      name: 'Curso de NodeJS',
      description: 'Curso de formação Backend NodeJS.',
      duration: '22hs',
      image: 'não possui',
      tag: 'técnico curta duração informática intermediário nodejs backend',
      id_type_formation: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Formations', [{
      name: 'Curso de Java',
      description: 'Curso de Java.',
      duration: '48hs',
      image: 'não possui',
      tag: 'técnico curta duração informática intermediário java backend',
      id_type_formation: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
