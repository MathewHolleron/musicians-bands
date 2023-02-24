const {Sequelize, sequelize} = require('./db');
const {DataTypes} = require("sequelize");
// TODO - define the Band model

const Song = sequelize.define('Song', {
    title: {
      type: DataTypes.STRING,
      
      
    },
    year: {
      type: DataTypes.INTEGER,
      
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }
  });
  
  module.exports = {
    Song
  };