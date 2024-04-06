import CharacterRepository from "../repositories/db/CharacterRepository";
import {getCharacterByFilters} from "../repositories/externalapi/GetCharacter";
import {ICharacterFoundsCriteria} from "../models/domain/CharacterModel";


export const getCharactersByFilter = async (foundCriteria : ICharacterFoundsCriteria)  => {
    const charByDbAndCharByApi = await   Promise.all([
            CharacterRepository.findCharacters(foundCriteria),
            getCharacterByFilters(foundCriteria)
    ]);

    if (charByDbAndCharByApi[0].length > 1){
        return charByDbAndCharByApi[0];
    }else {
        return charByDbAndCharByApi[1];
    }
}

