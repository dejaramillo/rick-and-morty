import Model from "sequelize/types/model";
import {Location as LocationModel} from "../../models/types/Location";
import Location from "../../models/request/LocationRequest";


class LocationRepository {

    public async putLocation(location: LocationModel){

        try {

            const [locationResponse, created]: [Model<LocationModel>, boolean]  = await Location.findOrCreate({
                where: { name: location.name, url: location.url }
            });

            if (created) {
                console.log('New origin');
                return locationResponse.get({plain: true})
            } else {
                console.log('Existing origin')
                return  locationResponse.get({plain: true})
            }

        } catch (err: any){

            console.error(err.message)
            throw new Error('Cannot save location')

        }

    }

}

const locationRepository = new LocationRepository();

export { locationRepository as LocationRepository };