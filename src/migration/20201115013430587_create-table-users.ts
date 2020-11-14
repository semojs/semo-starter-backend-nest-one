'use strict';

import {
  QueryInterface,
  DataTypes
} from 'sequelize';

export = {
  up: function (queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    return queryInterface.createTable('users', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      }
    });
  },

  down: function (queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    return queryInterface.dropTable('users');
  }
};