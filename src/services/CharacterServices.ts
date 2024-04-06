import { CharacterRepository } from "../repositories/db/CharacterRepository";
import {getCharacterByFilters} from "../repositories/externalapi/GetCharacter";
import {ICharacter, ICharacterFoundsCriteria} from "../models/domain/CharacterModel";


export const getCharactersByFilter = async (foundCriteria : ICharacterFoundsCriteria): Promise<ICharacter[]>  => {
    const charByDb = await  CharacterRepository.findCharacters(foundCriteria);

    if (charByDb.length > 0){
        return charByDb.map((character) => character.get({ plain: true }));
    }else {
        return getCharacterByFilters(foundCriteria);
    }
}

