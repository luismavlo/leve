const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Client = db.define('client', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

db.query("SELECT setval(pg_get_serial_sequence('clients', 'id'), 81, false);")
  .then(() => {
    console.log('Secuencia reiniciada exitosamente.');
  })
  .catch(error => {
    console.error('Error al reiniciar la secuencia:', error);
  });

module.exports = Client;
