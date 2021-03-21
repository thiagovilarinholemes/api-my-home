'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TypeFormations', [{
      name: 'Curso Técnico de informática - Básica',
      description: 'Curso de formação básico para escritório.',
      tag: 'técnico curta duração informática básico escritório',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('TypeFormations', [{
      name: 'Curso Técnico de informática - Intermediário',
      description: 'Curso de formação intermediário para desenvolvimento Web.',
      tag: 'técnico curta duração informática intermediário desenvolvimento NodeJS Java Backend',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('TypeFormations', [{
      name: 'Curso Técnico de informática Avançado',
      description: 'Curso de formação avançado para fullstack.',
      tag: 'técnico curta duração informática avançado fullstack NodeJS Java ReactJS Frontend Backend',
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
