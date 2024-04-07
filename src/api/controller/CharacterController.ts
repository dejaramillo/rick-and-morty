import {ICharacter, ICharacterFoundsCriteria} from "../../models/domain/CharacterModel";
import { getCharactersByFilter } from "../../services/CharacterServices";
import {buildCacheKey} from "../../utils/BuildCacheKey";
import {getCharByCache, setChar} from "../../repositories/cache/CharacterCacheRepository";

export const getCharacters = {
    characters: async (foundsCriteria: ICharacterFoundsCriteria) => {

        try{

            const cacheKey = buildCacheKey(foundsCriteria);

            const cacheData = await getCharByCache(cacheKey);

            if (cacheData){
                 return  JSON.parse(cacheData);
            }else {
                const characters = await  getCharactersByFilter(foundsCriteria);
                saveCache(characters, cacheKey);
                return characters
            }
        } catch (err){
            console.error(err);

        }
    },
};


const saveCache =  (characters: ICharacter[], cacheKey: string) => {

    if (characters.length > 0) {
        setChar(cacheKey, characters)
            .then(() => console.log('cache successfully saved'))
            .catch(err => console.error(err.message));

    }
}
