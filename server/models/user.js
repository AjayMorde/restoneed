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
    type: DataTypes.STRING,
    defaultValue: "user"
  },

  // 🔥 NEW FIELDS FOR OTP
  otp: {
    type: DataTypes.STRING(6),
    allowNull: true
  },

  otpExpiry: {
    type: DataTypes.DATE,
    allowNull: true
  },

  isVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }

}, {
  tableName: 'users',
  timestamps: true,
});

module.exports = User;
