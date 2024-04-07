import Model from "sequelize/types/model";

export const flatDataByDb = <T>(data: Model): T => {

    return data.get({ plain: true }) as T;

}