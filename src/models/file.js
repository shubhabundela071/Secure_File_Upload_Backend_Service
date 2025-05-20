const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('File', {
    id: { type: DataTypes.UUID, primaryKey: true },
    filename: DataTypes.STRING,
    originalName: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    extractedData: DataTypes.TEXT
  });
};
