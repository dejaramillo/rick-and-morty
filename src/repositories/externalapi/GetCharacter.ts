import axios from 'axios';
import dotenv from 'dotenv';
import {ICharacter, ICharacterFoundsCriteria} from "../../models/domain/CharacterModel";

dotenv.configDotenv();

const EXTERNAL_API = <string> process.env.EXTERNAL_API;



const buildQueryUrl = (foundsCriteria: ICharacterFoundsCriteria): string => {
    const { name, status, species, gender } = foundsCriteria;

    if (!EXTERNAL_API){
        throw new Error("External API not found");
    }

    let baseUrl = EXTERNAL_API;
    if (name) baseUrl += `&name=${name}`;
    if (status) baseUrl += `&status=${status}`;
    if (species) baseUrl += `&species=${species}`;
    if (gender) baseUrl += `&gender=${gender}`;
    return baseUrl;
};

const filterByOrigin = (foundsCriteria: ICharacterFoundsCriteria, characters: ICharacter[]): ICharacter[] => {
    if(foundsCriteria.originName && foundsCriteria.originUrl){
        return characters.filter((character: ICharacter) =>
            character.origin.name === foundsCriteria.originName &&
                character.origin.url === foundsCriteria.originUrl
        );
    }

    if (foundsCriteria.originName){
        return characters.filter((character: ICharacter) =>
            character.origin.name === foundsCriteria.originName
        );
    }

    if (foundsCriteria.originUrl){
        return characters.filter((character: ICharacter) =>
            character.origin.url === foundsCriteria.originUrl
        );
    }
    return characters;
}

export const getCharacterByFilters = async (foundsCriteria: ICharacterFoundsCriteria) => {
        try {
            const url = buildQueryUrl(foundsCriteria);
            const { data } = await axios.get(url);
            const characters =  data.results.map((character: ICharacter)  => ({
                ...character
            }));
            return filterByOrigin(foundsCriteria, characters)
        } catch (error) {
            console.error(error);
            return [];
        }
}
