import {
    ICharacter,
    ICharacterFoundsCriteria,
    ICharacterIds,
    IEpisodeMatchResponse
} from "../../models/domain/CharacterModel";
import { getCharactersByFilter } from "../../services/CharacterServices";
import {buildCacheKey} from "../../utils/BuildCacheKey";
import {getCharByCache, setChar} from "../../repositories/cache/CharacterCacheRepository";
import {withExecutionLogging} from "../../utils/ExecutioLoggin";
import {compareCharacterByEpisode} from "../../services/CharCompareServices";


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

const charEpisodeMatch = async (characterIds: ICharacterIds):Promise<IEpisodeMatchResponse> => {

    try {
        const numberOfMatch = await  compareCharacterByEpisode(characterIds)
        console.log(numberOfMatch);
        return {result: numberOfMatch};
    } catch (err){
        console.error(err);
        return {result: 0};
    }

}

export const getCharacters = {
    characters: withExecutionLogging(charactersLogic),
    compareCharacters: withExecutionLogging(charEpisodeMatch)
};

const saveCache =  (characters: ICharacter[], cacheKey: string) => {

    if (characters.length > 0) {
        setChar(cacheKey, characters)
            .then(() => console.log('cache successfully saved'))
            .catch(err => console.error(err.message));

    }
}
