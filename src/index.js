require("dotenv").config();
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { ApolloServer } = require("apollo-server-express");
const { createServer } = require("http");
const express = require("express");
const cors = require("cors");
const { connectMongoDB } = require("./config/database/mongodb");
const models = require("./app/model");
const controller = require("./app/controller");
const schemas = require("./app/schema");

const startServer = async () => {
    connectMongoDB();
    const schema = makeExecutableSchema({ typeDefs: schemas, resolvers: controller });
    const server = new ApolloServer({
        schema,
        context: async ({ req }) => {
            return {
                req,
                models,
            };
        },
    });
    await server.start();
    const app = express();
    app.use(cors());

    app.get("/api/status", (req, res) => {
        res.status(200).json({ message: "Worked" });
    });

    const httpServer = createServer(app);
    server.applyMiddleware({ app, path: "/auth-service" });
    await new Promise((resolve) => httpServer.listen({ port: process.env.SERVER_PORT }, resolve));

    console.log(`🚀 Server ready at http://localhost:${process.env.SERVER_PORT}${server.graphqlPath}`);
    return { server, app };
}

startServer();