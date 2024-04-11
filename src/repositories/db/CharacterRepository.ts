import {ICharacter, ICharacterFoundsCriteria} from "../../models/domain/CharacterModel";
import {IncludeOptions, Op} from "sequelize";
import Origin from "../../models/request/OriginRequest";
import Location from "../../models/request/LocationRequest";
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

            return characters;
        } catch (error) {
            console.error('Error during character fetch:', error);
            throw error;
        }

    }


    public async findCharById(id: number): Promise<Model<ICharacter, ICharacter> | null> {

        const include: IncludeOptions[] = this.addIncludesToQuery();

        return Character.findByPk(id,{
                    include: include
            });

    }
    public async findAllCharacters(): Promise<Model<ICharacter>[]> {

        const include: IncludeOptions[] = this.addIncludesToQuery()

        return Character.findAll({
            include: include
        });

    }

    public async updateCharacter(character: ICharacter){

        const [characterResponse, created] : [Model<ICharacter>, boolean] = await Character.findOrCreate({
            where: {id: character.id}
        });

        if (!created){
            return characterResponse.update(character);

        }

        throw new Error('Cannot update because char has not been created')

    }

    public async putCharacter(character: ICharacter){


        try {
            const origin = await OriginRepository.putOrigin(character.origin);

            const location = await LocationRepository.putLocation(character.location)



            return Character.findOrCreate({
                where: { id: character.id},
                defaults: {
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
                locationId: location.id,
                id_external_api: character.idExternalApi
                }
            });

        } catch (err: any){
            console.error(err.message);
            throw new Error("Cannot save character")
        }
    }

    private buildFilter(filters: ICharacterFoundsCriteria) {
        const whereClause: WhereOptions<CharacterAttributes> = {};



        if (filters.name) whereClause.name = { [Op.iLike]: `%${filters.name}%` || ''};
        if (filters.status) whereClause.status = { [Op.eq]: filters.status };
        if (filters.species) whereClause.species = { [Op.iLike]: `%${filters.species}%` };
        if (filters.gender) whereClause.gender = { [Op.eq]: filters.gender };

        const include: IncludeOptions[] = this.addIncludesToQuery()


        if (filters.originName) {
            // @ts-ignore
            include[include.length - 2].where.name = { [Op.eq]: filters.originName };
        }
        if (filters.originUrl) {
            // @ts-ignore
            include[include.length - 2].where.url = { [Op.eq]: filters.originUrl };
        }

        return {
            include: include,
            whereClause: whereClause
        }

    }

    private addIncludesToQuery(){

        const include: IncludeOptions[] = [];

        include.push({
            model: Origin,
            as: 'origin',
            where: {},
            required: true
        });


        include.push({
            model: Location,
            as: 'location',
            where: {},
            required: false
        });

        return include

    }

}

const characterRepository: CharacterRepository = new CharacterRepository();

export { characterRepository  as CharacterRepository};


