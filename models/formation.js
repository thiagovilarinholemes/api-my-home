/**
 * Athor: Thiago Vilarinho Lemes
 * contact: lemes_vilarinho@yahoo.com.br / contatothiagolemes@gmail.com
 * site: thiagolemes.rf.gd
 * Data: 21/03/2020
 * version: 1.0
 */

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Formation extends Model {
    
    static associate(models) {
      Formation.belongsToMany(models.User, {through: 'UserFormation', foreignKey: 'formationId', as: 'users'})
      Formation.belongsTo(models.TypeFormation, {foreignKey: 'id_type_formation'}) // Relation 1:1 typefomation.js
    }
  };
  Formation.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.STRING,
    image: DataTypes.STRING,
    tag: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Formation',
  });
  return Formation;
};