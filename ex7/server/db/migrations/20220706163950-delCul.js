module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.removeColumn(
			'Items',
			'item_id',
			Sequelize.INTEGER
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.addColumn('Items', 'item_id', Sequelize.INTEGER);
	},
};
