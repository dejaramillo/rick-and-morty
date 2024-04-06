export type Location = {
    name: string;
    url:  string;
}


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
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;

}