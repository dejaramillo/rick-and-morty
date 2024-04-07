import {QueryInterface} from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('origin', [
  {
    "id": 53,
    "name": "Earth (C-137)",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  {
    "id": 54,
    "name": "unknown",
    "url": ""
  },
  {
    "id": 55,
    "name": "Earth (Replacement Dimension)",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  {
    "id": 56,
    "name": "Earth (Replacement Dimension)",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  {
    "id": 57,
    "name": "Earth (Replacement Dimension)",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  {
    "id": 58,
    "name": "Abadango",
    "url": "https://rickandmortyapi.com/api/location/2"
  },
  {
    "id": 59,
    "name": "Earth (Replacement Dimension)",
    "url": "https://rickandmortyapi.com/api/location/20"
  }
], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('origin', {});
  }
};
    