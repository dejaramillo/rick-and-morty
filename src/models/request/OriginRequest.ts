import {DataTypes} from "sequelize";
import sequelize from "../../repositories/db/DbConfig";


const Origin = sequelize.define('Origin', {
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
},{
    tableName: 'origin',
    timestamps: false,
});

export default Origin;