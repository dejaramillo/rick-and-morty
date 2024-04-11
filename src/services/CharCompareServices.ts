import {CharacterRepository} from "../repositories/db/CharacterRepository";
import {ICharacter, ICharacterIds} from "../models/domain/CharacterModel";
import {flatDataByDb} from "../utils/flatObjectsToDb";

export const compareCharacterByEpisode = async (characterIds: ICharacterIds ) => {

        const [firstChar, secondChar] = await  Promise.all([
            CharacterRepository.findCharById(characterIds.firstCharId),
            CharacterRepository.findCharById(characterIds.secondCharId),
        ]);


        if (firstChar && secondChar){
            return validateEpisode(flatDataByDb<ICharacter>(firstChar).episode,
                flatDataByDb<ICharacter>(secondChar).episode)
        }else {
            return 0;
        }
}


const validateEpisode = (listOne: string[], listTwo: string[]) => {

    const episodeMatch = {}

    // @ts-ignore
    listOne.forEach((episode: string) => episodeMatch[episode] = 0)
    let  count = 0;
    listTwo.forEach((episode: string) => {
        if (episode in episodeMatch){
            count++;
        }
    })


    return count;

}