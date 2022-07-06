'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('Items', 'status', {
			type: Sequelize.BOOLEAN,
			
			allowNull: false,
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('Items', 'status', {
			type: Sequelize.BOOLEAN,
		});
	},
};
