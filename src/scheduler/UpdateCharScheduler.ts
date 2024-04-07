import { CronJob } from "cron";
import {updateChars} from "../services/CharacterServices";

const TIME_ZONE = process.env.TIME_ZONE || 'America/New_York'

export const jobUpdateChar = new CronJob('0 */12 * * *', () => {
    console.log(`Run update char scheduler ${new Date()}`);

    updateChars().then(() => console.log(`End to update chars by schedule ${new Date()}`))
        .catch((err) => console.error(err.message));

}, null, true, TIME_ZONE)