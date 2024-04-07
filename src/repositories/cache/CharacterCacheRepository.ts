import Redis from "ioredis";
import {ICharacter} from "../../models/domain/CharacterModel";
import dotenv from "dotenv";


const redis = new Redis();

dotenv.config();

const TIME_TO_EXPIRE_CACHE_DATA =  process.env.CACHE_TIME || 3600

export const getCharByCache = async (key: string) => {

    return redis.get(key);

}


export const setChar = async (key: string, response: ICharacter[]) => {
    return  redis.set(key, JSON.stringify(response), 'EX', TIME_TO_EXPIRE_CACHE_DATA);
}