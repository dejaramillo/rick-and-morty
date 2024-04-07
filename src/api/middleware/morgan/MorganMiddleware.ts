import morgan, { StreamOptions } from "morgan";

import { IncomingMessage } from "http";

interface Request extends IncomingMessage {
    body: {
        query: String;
    };
    ip: String;
}

const stream: StreamOptions = {
    write: (message) =>
        console.log(message.substring(0, message.lastIndexOf("\n"))),
};

const skip = () => {
    const env = process.env.NODE_ENV || "development";
    return env !== "development";
};

const registerGraphQLToken = () => {
    morgan.token("graphql-query", (req: Request) => `GraphQL ${req.body.query}`);
    morgan.token("ip", (req: Request) => `Ip ${req.ip}`);
    morgan.token("execution-time", (_req: Request) => `Execution Time ${new Date()}`);
};

registerGraphQLToken();

const morganMiddleware = morgan(
    ":method :url :status :res[content-length] - :response-time ms\n:graphql-query\n:ip\n:execution-time",
    { stream, skip }
);

export default morganMiddleware;