import {DataTypes} from "sequelize";
import sequelize from "../../repositories/db/DbConfig";


const Location = sequelize.define('Location', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'location',
    timestamps: false,
});

export default Location;