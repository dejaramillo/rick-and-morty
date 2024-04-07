import { QueryInterface, DataTypes } from 'sequelize';


export const up = (queryInterface: QueryInterface): Promise<void> => {
  return queryInterface.createTable('character', {
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
        model: 'origin',
        key: 'id'
      },
      field: 'origin_id'
    },
    locationId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
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
  });
};

export const down = (queryInterface: QueryInterface): Promise<void> => {
  return queryInterface.dropTable('character');
};