const { DataTypes } = require('sequelize');
const sequelize = require('../connection/database');

const FormData = sequelize.define('FormData', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  restaurantname: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  managername: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  countrycode: {
    type: DataTypes.STRING(5),
    allowNull: false,
  },

  mobilenumber: {
    type: DataTypes.STRING(15),
    allowNull: false,
    validate: {
      isNumeric: true,
    }
  },

  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    }
  }

}, {
  tableName: 'form_data',   // no confusion
  timestamps: true          // createdAt, updatedAt
});

module.exports = FormData;



