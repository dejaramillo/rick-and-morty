import {ICharacter, ICharacterFoundsCriteria} from "../../models/domain/CharacterModel";
import { getCharactersByFilter } from "../../services/CharacterServices";
import {buildCacheKey} from "../../utils/BuildCacheKey";
import {getCharByCache, setChar} from "../../repositories/cache/CharacterCacheRepository";
import {withExecutionLogging} from "../../utils/ExecutioLoggin";


const charactersLogic = async (foundsCriteria: ICharacterFoundsCriteria) => {
    try {
        const cacheKey = buildCacheKey(foundsCriteria);

        const cacheData = await getCharByCache(cacheKey);

        if (cacheData) {
            return JSON.parse(cacheData);
        } else {
            const characters = await getCharactersByFilter(foundsCriteria);
            saveCache(characters, cacheKey);
            return characters;
        }
    } catch (err) {
        console.error(err);
        return [];
    }
};

export const getCharacters = {
    characters: withExecutionLogging(charactersLogic),
};

const saveCache =  (characters: ICharacter[], cacheKey: string) => {

    if (characters.length > 0) {
        setChar(cacheKey, characters)
            .then(() => console.log('cache successfully saved'))
            .catch(err => console.error(err.message));

    }
}
