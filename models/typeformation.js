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
  class TypeFormation extends Model {
    
    static associate(models) {
      TypeFormation.hasMany(models.Formation, {as: 'id_formation'}) // Relation 1:N typefomation.js
    }
  };
  TypeFormation.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    tag: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TypeFormation',
  });
  return TypeFormation;
};