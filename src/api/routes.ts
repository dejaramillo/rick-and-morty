import {Router} from "express";
import {graphqlHTTP} from "express-graphql";
import characterSchema from "../models/query/CharacterSchema";
import {getCharacters} from "./controller/CharacterController";
import morganMiddleware from "./middleware/morgan/MorganMiddleware";



const router = Router();


router.use(morganMiddleware);

router.use(
    '/',
    graphqlHTTP({
        schema: characterSchema,
        rootValue: getCharacters,
        graphiql: true,
    })
);




export default router;