import {ICharacterFoundsCriteria} from "../models/domain/CharacterModel";


const UNION_TYPE_CHAR = '|'
export const buildCacheKey = (foundsCriteria: ICharacterFoundsCriteria) => {


    // @ts-ignore
    const validKeys = Object.keys(foundsCriteria).filter(key => foundsCriteria[key] !== undefined);

    const sortKeys = validKeys.sort();

    // @ts-ignore
    return  sortKeys.map((key: string) => `${key}:${foundsCriteria[key]}`).join(UNION_TYPE_CHAR);

}