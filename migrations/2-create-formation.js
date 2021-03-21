'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Formations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        default: ''
      },
      duration: {
        type: Sequelize.STRING,
        default: ''
      },
      image: {
        type: Sequelize.STRING,
        default: ''
      },
      tag: {
        type: Sequelize.STRING,
        default: ''
      },
      id_type_formation:{
        type: Sequelize.INTEGER,
        references: {         // User belongsTo Company 1:1
          model: 'TypeFormations',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Formations');
  }
};