const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);
const FileModel = require('./file');

const File = FileModel(sequelize);

module.exports = { sequelize, File };
