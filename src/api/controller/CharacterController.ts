import {ICharacterFoundsCriteria} from "../../models/domain/CharacterModel";
import { getCharactersByFilter } from "../../services/CharacterServices";

export const getCharacters = {
    characters: async (foundsCriteria: ICharacterFoundsCriteria) => {
        const character = await getCharactersByFilter(foundsCriteria);
        return character;

    },
};