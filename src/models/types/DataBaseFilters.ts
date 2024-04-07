export interface CharacterAttributes {
    name?: string;
    status?: string;
    species?: string;
    gender?: string;
    originName?: string;
    originUrl?: string;
}

export type BuiltFilters = {
    whereClause: CharacterAttributes;
    include: any;
}