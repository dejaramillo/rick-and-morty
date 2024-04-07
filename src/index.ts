import express, {Request, Response} from 'express';
import dotenv from "dotenv";
import router from "./api/routes";

dotenv.config();

const PORT = process.env.PORT || 9000;

const API_PATH = process.env.API_PATH || '';

const app = express()

app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
    res.send('OK');
});


app.use(API_PATH, router);

app.listen(PORT, () => {
    console.info(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
