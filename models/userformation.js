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
  class UserFormation extends Model {
    
    static associate(models) {
      UserFormation.belongsTo(models.User, {foreignKey: 'userId'})
      UserFormation.belongsTo(models.Formation, {foreignKey: 'formationId'})
    }
  };
  UserFormation.init({
    userId: DataTypes.INTEGER,
    formationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserFormation',
  });
  return UserFormation;
};