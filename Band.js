const {Sequelize, sequelize} = require('./db');
const {DataTypes} = require("sequelize");
// TODO - define the Band model

const Band = sequelize.define('Band', {
    name: {
      type: DataTypes.STRING,
      
      
    },
    genre: {
      type: DataTypes.STRING,
      
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }
  });
  
  

module.exports = {
    Band
};