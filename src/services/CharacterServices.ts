import { CharacterRepository } from "../repositories/db/CharacterRepository";
import {getCharacterByFilters, getCharacterById} from "../repositories/externalapi/GetCharacter";
import {ICharacter, ICharacterFoundsCriteria} from "../models/domain/CharacterModel";
import {flatDataByDb} from "../utils/flatObjectsToDb";


export const getCharactersByFilter = async (foundCriteria : ICharacterFoundsCriteria): Promise<ICharacter[]>  => {
    const charByDb = await  CharacterRepository.findCharacters(foundCriteria);

    if (charByDb.length > 0){
        return charByDb.map((character) => flatDataByDb<ICharacter>(character));
    }else {
        const characters = await  getCharacterByFilters(foundCriteria);
        saveCharacterFromApi(characters);
        return characters;

    }
}


export const updateChars = async () => {

    const rawChars = await CharacterRepository.findAllCharacters();

    if (rawChars.length > 0){
         const charsByDb = rawChars.map((character) => flatDataByDb<ICharacter>(character));

        for (const char of charsByDb) {

            await updateIfChangeChar(char);

        }

    }

}


const updateIfChangeChar = async (character: ICharacter) => {
        const charByApi = await getCharacterById(character.idExternalApi);

        if (!compareChars(character, charByApi)){
            const charToUpdate = {
                ...charByApi,
                id: character.id,
                idExternalApi: charByApi.id,
            }
            await CharacterRepository.updateCharacter(charToUpdate)
        }
}

const compareChars = (characterFromDb: ICharacter, characterFromApi: ICharacter) => {

    const keys = Object.keys(characterFromDb).filter((key: string) => key !== 'id');

    for (const key of keys) {

        // @ts-ignore
        if (characterFromDb[key] !== characterFromApi[key]) {

            return false;
        }
    }

    return true;

}


const saveCharacterFromApi = (characters: ICharacter[]) =>{

    if (characters.length > 0) {
        characters.forEach((char: ICharacter) => {
            CharacterRepository.putCharacter(char).then(() => console.log(`save ${char.name}`))
                .catch(() => console.error('Cannot save char'));
        })
    }
}

