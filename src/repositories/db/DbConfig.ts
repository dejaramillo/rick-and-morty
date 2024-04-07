import {Sequelize} from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const USER: string = <string> process.env.USER;
const PASSWORD :string = <string> process.env.PASSWORD;
const DB :string = <string> process.env.DB;
const HOST :string = <string> process.env.HOST;



const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: 'postgres'
});

export default sequelize;