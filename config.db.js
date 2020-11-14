const dotenv = require('dotenv');
dotenv.config();

const getConfig = require('./dist/common/config/app.config').default;
const { database } = getConfig();

module.exports = database;
