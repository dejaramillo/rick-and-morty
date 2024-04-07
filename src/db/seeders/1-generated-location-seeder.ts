import {QueryInterface} from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('location', [
  {
    "id": 65,
    "name": "Citadel of Ricks",
    "url": "https://rickandmortyapi.com/api/location/3"
  },
  {
    "id": 66,
    "name": "Citadel of Ricks",
    "url": "https://rickandmortyapi.com/api/location/3"
  },
  {
    "id": 67,
    "name": "Earth (Replacement Dimension)",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  {
    "id": 68,
    "name": "Earth (Replacement Dimension)",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  {
    "id": 69,
    "name": "Abadango",
    "url": "https://rickandmortyapi.com/api/location/2"
  },
  {
    "id": 70,
    "name": "Testicle Monster Dimension",
    "url": "https://rickandmortyapi.com/api/location/21"
  },
  {
    "id": 71,
    "name": "Worldender's lair",
    "url": "https://rickandmortyapi.com/api/location/4"
  },
  {
    "id": 72,
    "name": "Anatomy Park",
    "url": "https://rickandmortyapi.com/api/location/5"
  }
], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Origin', {});
  }
};
    