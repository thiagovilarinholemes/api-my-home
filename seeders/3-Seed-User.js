'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Spack',
      lastName: 'Rella',
      email: 'Não possui',
      password: '123',
      phone: 'Não possui',
      image: 'Não possui',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('UserFormations', [{
      userId: 1,
      formationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Users', [{
      firstName: 'Thiago',
      lastName: 'V. Lemes',
      email: 'lemes_vilarinho@yahoo.com.br',
      password: '123',
      phone: '63 999999-9999',
      image: 'Não possui',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('UserFormations', [{
      userId: 2,
      formationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('UserFormations', [{
      userId: 2,
      formationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('UserFormations', [{
      userId: 2,
      formationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});


    await queryInterface.bulkInsert('Users', [{
      firstName: 'Carina',
      lastName: 'Lima',
      email: 'lima@gmail.com',
      password: '123',
      phone: '63 11111-1111',
      image: 'Não possui',
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('UserFormations', [{
      userId: 3,
      formationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    await queryInterface.bulkInsert('UserFormations', [{
      userId: 3,
      formationId: 1,
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
