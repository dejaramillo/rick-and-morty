import {Origin} from "../types/Origin";
import {Location} from "../types/Location";

export interface ICharacterFoundsCriteria {

    name?: string;
    status?: string;
    species?: string;
    gender?: string;
    originName?: string;
    originUrl?: string;
}




export interface ICharacter {

    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Origin;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
    idExternalApi: number

}

export interface ICharacterUpdate extends ICharacter{
    id_api: number;
}