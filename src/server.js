import { GrapghQLServer, GraphQLServer } from "graphql-yoga";
import logger from "morgan";

const schema = "hello";
const PORT = 4000;

const server = new GraphQLServer({
    schema,
    context: ({ request }) => ({ request })
});

server.express.use(logger("dev"));

server.start({ port: PORT }, () => {
    console.log('ABC');
});