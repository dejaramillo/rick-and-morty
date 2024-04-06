import {Router} from "express";
import {graphqlHTTP} from "express-graphql";
import characterSchema from "../models/query/CharacterSchema";
import {getCharacters} from "./controller/CharacterController";



const router = Router();

router.use(
    '/',
    graphqlHTTP({
        schema: characterSchema,
        rootValue: getCharacters,
        graphiql: true,
    })
);


export default router;