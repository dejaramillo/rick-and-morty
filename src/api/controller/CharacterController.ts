import { ICharacterFoundsCriteria } from "../../models/domain/CharacterModel";
import { getCharactersByFilter } from "../../services/CharacterServices";
import {buildCacheKey} from "../../utils/BuildCacheKey";
import {getCharByCache, setChar} from "../../repositories/cache/CharacterCacheRepository";

export const getCharacters = {
    characters: async (foundsCriteria: ICharacterFoundsCriteria) => {

        const cacheKey = buildCacheKey(foundsCriteria);

        const cacheData = await getCharByCache(cacheKey);

        if (cacheData){
             return  JSON.parse(cacheData);
        }else {
            const characters = await  getCharactersByFilter(foundsCriteria);
            setChar(cacheKey, characters)
                .then(() => console.log('cache successfully saved'))
                .catch(err => console.error(err.message));

            return characters;
        }
    },
};

