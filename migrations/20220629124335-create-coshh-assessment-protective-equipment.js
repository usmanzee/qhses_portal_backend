"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "qhses_coshh_assessment_protective_equipments",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        assessment_id: {
          type: Sequelize.INTEGER,
        },
        protective_equipment_id: {
          type: Sequelize.INTEGER,
        },
        other_description: {
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(
      "qhses_coshh_assessment_protective_equipments"
    );
  },
};
