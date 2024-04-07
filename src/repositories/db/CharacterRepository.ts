import {ICharacter, ICharacterFoundsCriteria} from "../../models/domain/CharacterModel";
import {IncludeOptions, Op} from "sequelize";
import Origin from "../../models/request/OriginRequest";
import Character from "../../models/request/CharacterRequest"
import Model, { WhereOptions } from "sequelize/types/model";
import {CharacterAttributes} from "../../models/types/DataBaseFilters";
import {OriginRepository} from "./OriginRepository";
import {LocationRepository} from "./LocationRepository";

class CharacterRepository {

    public async findCharacters(filters: ICharacterFoundsCriteria) {

        const filtersBuilt = this.buildFilter(filters)

        try {
            const characters: Model<ICharacter>[] = await Character.findAll({
                where: filtersBuilt.whereClause,
                include: filtersBuilt.include
            });

            console.log(characters);
            return characters;
        } catch (error) {
            console.error('Error during character fetch:', error);
            throw error;
        }

    }


    public async putCharacter(character: ICharacter){


        try {
            const origin = await OriginRepository.putOrigin(character.origin);

            const location = await LocationRepository.putLocation(character.location)



            return  Character.create({
                name: character.name,
                status: character.status,
                species: character.species,
                type: character.type,
                gender: character.gender,
                image: character.image,
                episode: character.episode,
                url: character.url,
                created_at: new Date(character.created),
                originId: origin.id,
                locationId: location.id
            });

        } catch (err: any){
            console.error(err.message);
            throw new Error("Cannot save character")
        }
    }

    private buildFilter(filters: ICharacterFoundsCriteria) {
        const whereClause: WhereOptions<CharacterAttributes> = {};
        const include: IncludeOptions[] = [];


        if (filters.name) whereClause.name = { [Op.iLike]: `%${filters.name}%` || ''};
        if (filters.status) whereClause.status = { [Op.eq]: filters.status };
        if (filters.species) whereClause.species = { [Op.iLike]: `%${filters.species}%` };
        if (filters.gender) whereClause.gender = { [Op.eq]: filters.gender };


        if (filters.originName || filters.originUrl) {
            include.push({
                model: Origin,
                as: 'origin',
                where: {},
                required: false
            });

            if (filters.originName) {
                // @ts-ignore
                include[include.length - 1].where.name = { [Op.iLike]: `%${filters.originName}%` };
            }
            if (filters.originUrl) {
                // @ts-ignore
                include[include.length - 1].where.url = { [Op.eq]: filters.originUrl };
            }
        }

        return {
            include: include,
            whereClause: whereClause
        }

    }

}

const characterRepository: CharacterRepository = new CharacterRepository();

export { characterRepository  as CharacterRepository};


