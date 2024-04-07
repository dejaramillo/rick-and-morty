import {QueryInterface} from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('character', [
      {
        "id": 106,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "origin_id": 53,
        "location_id": 65,
        "episode": [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          "https://rickandmortyapi.com/api/episode/3",
          "https://rickandmortyapi.com/api/episode/4",
          "https://rickandmortyapi.com/api/episode/5",
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/13",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/17",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/28",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/37",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/50",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        "url": "https://rickandmortyapi.com/api/character/1",
        "created_at": "2024-04-07T03:02:43.492Z"
      },
      {
        "id": 111,
        "name": "Adjudicator Rick",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
        "origin_id": 54,
        "location_id": 65,
        "episode": [
          "https://rickandmortyapi.com/api/episode/28"
        ],
        "url": "https://rickandmortyapi.com/api/character/8",
        "created_at": "2024-04-07T03:02:43.535Z"
      },
      {
        "id": 107,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        "origin_id": 54,
        "location_id": 66,
        "episode": [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          "https://rickandmortyapi.com/api/episode/3",
          "https://rickandmortyapi.com/api/episode/4",
          "https://rickandmortyapi.com/api/episode/5",
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/13",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/17",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/28",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/37",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/50",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        "url": "https://rickandmortyapi.com/api/character/2",
        "created_at": "2024-04-07T03:02:43.503Z"
      },
      {
        "id": 108,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        "origin_id": 55,
        "location_id": 67,
        "episode": [
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/17",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        "url": "https://rickandmortyapi.com/api/character/3",
        "created_at": "2024-04-07T03:02:43.506Z"
      },
      {
        "id": 109,
        "name": "Jerry Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        "origin_id": 57,
        "location_id": 67,
        "episode": [
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/13",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/50",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        "url": "https://rickandmortyapi.com/api/character/5",
        "created_at": "2024-04-07T03:02:43.518Z"
      },
      {
        "id": 110,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        "origin_id": 56,
        "location_id": 68,
        "episode": [
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/28",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        "url": "https://rickandmortyapi.com/api/character/4",
        "created_at": "2024-04-07T03:02:43.526Z"
      },
      {
        "id": 112,
        "name": "Abadango Cluster Princess",
        "status": "Alive",
        "species": "Alien",
        "type": "",
        "gender": "Female",
        "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        "origin_id": 58,
        "location_id": 69,
        "episode": [
          "https://rickandmortyapi.com/api/episode/27"
        ],
        "url": "https://rickandmortyapi.com/api/character/6",
        "created_at": "2024-04-07T03:02:43.538Z"
      },
      {
        "id": 113,
        "name": "Agency Director",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
        "origin_id": 55,
        "location_id": 67,
        "episode": [
          "https://rickandmortyapi.com/api/episode/24"
        ],
        "url": "https://rickandmortyapi.com/api/character/9",
        "created_at": "2024-04-07T03:02:43.552Z"
      },
      {
        "id": 114,
        "name": "Abradolf Lincler",
        "status": "unknown",
        "species": "Human",
        "type": "Genetic experiment",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
        "origin_id": 59,
        "location_id": 70,
        "episode": [
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11"
        ],
        "url": "https://rickandmortyapi.com/api/character/7",
        "created_at": "2024-04-07T03:02:43.541Z"
      },
      {
        "id": 115,
        "name": "Albert Einstein",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
        "origin_id": 53,
        "location_id": 67,
        "episode": [
          "https://rickandmortyapi.com/api/episode/12"
        ],
        "url": "https://rickandmortyapi.com/api/character/11",
        "created_at": "2024-04-07T03:02:43.563Z"
      },
      {
        "id": 117,
        "name": "Alan Rails",
        "status": "Dead",
        "species": "Human",
        "type": "Superhuman (Ghost trains summoner)",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
        "origin_id": 54,
        "location_id": 71,
        "episode": [
          "https://rickandmortyapi.com/api/episode/25"
        ],
        "url": "https://rickandmortyapi.com/api/character/10",
        "created_at": "2024-04-07T03:02:43.575Z"
      },
      {
        "id": 118,
        "name": "Alien Morty",
        "status": "unknown",
        "species": "Alien",
        "type": "",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
        "origin_id": 54,
        "location_id": 65,
        "episode": [
          "https://rickandmortyapi.com/api/episode/10"
        ],
        "url": "https://rickandmortyapi.com/api/character/14",
        "created_at": "2024-04-07T03:02:43.587Z"
      },
      {
        "id": 119,
        "name": "Alexander",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
        "origin_id": 53,
        "location_id": 72,
        "episode": [
          "https://rickandmortyapi.com/api/episode/3"
        ],
        "url": "https://rickandmortyapi.com/api/character/12",
        "created_at": "2024-04-07T03:02:43.582Z"
      },
      {
        "id": 116,
        "name": "Alien Googah",
        "status": "unknown",
        "species": "Alien",
        "type": "",
        "gender": "unknown",
        "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
        "origin_id": 54,
        "location_id": 67,
        "episode": [
          "https://rickandmortyapi.com/api/episode/31"
        ],
        "url": "https://rickandmortyapi.com/api/character/13",
        "created_at": "2024-04-07T03:02:43.569Z"
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('character', {});
  }
};
    