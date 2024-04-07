import {DataTypes} from "sequelize";
import sequelize from "../../repositories/db/DbConfig";
import Origin from "./OriginRequest";
import Location from "./LocationRequest"




const Character = sequelize.define('Character', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
    species: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    originId: {
        type: DataTypes.INTEGER,
        references: {
            model: Origin,
            key: 'id'
        },
        field: 'origin_id'
    },
    locationId: {
        type: DataTypes.INTEGER,
        references: {
            model: Location,
            key: 'id'
        },
        field: 'location_id'
    },
    episode: {
        type: DataTypes.ARRAY(DataTypes.STRING),
    },
    url: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'created_at'
    },
    idExternalApi: {
        type: DataTypes.INTEGER,
        field: 'id_external_api'
    }
}, {
    tableName:'character',
    timestamps: false,
});

Character.belongsTo(Origin, {foreignKey: 'originId', as: 'origin'});
Origin.hasOne(Character, {foreignKey: 'originId'});

Character.belongsTo(Location, {foreignKey: 'locationId', as: 'location'});
Location.hasOne(Character, {foreignKey: 'locationId'});

export default Character;