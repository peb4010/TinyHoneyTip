'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class scrap extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.scrap.belongsTo(models.post_container, { foreignKey: 'post_id' });
            models.scrap.belongsTo(models.User, { foreignKey: 'user_id' });
        }
    }
    scrap.init(
        {
            user_id: DataTypes.INTEGER,
            post_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'scrap',
        },
    );
    return scrap;
};
