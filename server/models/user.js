const { DataTypes } = require('sequelize');
const sequelize = require('../connection/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },

  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },

  role: {
    type: DataTypes.ENUM("manager", "cook", "staff"),
    defaultValue: "staff"
  }

}, {
  tableName: 'users',
  timestamps: true,

  hooks: {
    beforeCreate: (user) => {
      user.email = user.email.toLowerCase();
    }
  },

  indexes: [
    {
      unique: true,
      fields: ['email']
    }
  ]
});

module.exports = User;
