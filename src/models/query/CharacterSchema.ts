import {buildSchema} from "graphql";


const charSchema = buildSchema(`
 type Location {
    name: String
    url:  String
}
 
  type Character {
    id: ID!
    name: String!
    status: String
    species: String
    gender: String
    origin: Location
    location: Location
    image:    String
    episode:  String
    url:      String  
    created:  String
  }

  type Query {
    characters(name: String, status: String, species: String, gender: String, originName: String, originUrl: String): [Character]
  }
`);

export default charSchema;