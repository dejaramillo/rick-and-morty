import { QueryInterface, DataTypes } from 'sequelize';

export const up = async (queryInterface: QueryInterface): Promise<void> => {
  await queryInterface.createTable('origin', {
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
  });
};

export const down = async (queryInterface: QueryInterface): Promise<void> => {
  await queryInterface.dropTable('origin');
};