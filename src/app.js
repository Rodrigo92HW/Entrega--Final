import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionsRouter from "./routes/adoption.router.js";
import sessionsRouter from "./routes/sessions.router.js";
import mocksRouter from "./routes/mocks.router.js";

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express"

const app = express();
const PORT = process.env.PORT || 8080;
const connection = mongoose.connect("mongodb+srv://coderhouse70410:coderhouse@cluster0.34nyl.mongodb.net/Backend3FinalAltaClase?retryWrites=true&w=majority&appName=Cluster0");

//Configuraciones
app.use(express.json());
app.use(cookieParser());

//Base de datos
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/api/mocks", mocksRouter);

//Swagger
const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info : {
            title: "Documentacion de la App AdoptaMe",
            description: "App dedicada a encontrar familias para perritos de la calle"
        }
    },
    apis: ["./src/docs/**/*.yaml"]
}
const specs = swaggerJSDoc(swaggerOptions);
app.use("/apidocs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

//Conexión a la base de datos
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
