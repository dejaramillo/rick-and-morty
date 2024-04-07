import Model from "sequelize/types/model";
import {Origin as OriginModel} from "../../models/types/Origin";
import Origin from "../../models/request/OriginRequest";



class OriginRepository {
    public async putOrigin(origin: OriginModel) {

        try {

            const [originResponse, created]: [Model<OriginModel>, boolean] = await Origin.findOrCreate({
                where: { name: origin.name, url: origin.url }
            });

            if (created) {
                console.log('New origin');
                return originResponse.get({plain: true})
            } else {
                console.log('Existing origin')
                return  originResponse.get({plain: true})
            }


        } catch (err: any){

            console.error(err.message);
            throw new Error('Cannot save Origin');

        }

    }
}

const originRepository = new OriginRepository();

export {originRepository as OriginRepository}