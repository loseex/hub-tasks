/**
 * ядро приложения
 */
import { ApplicationController } from "./controllers/application.controller.js";

import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", new ApplicationController());

app.listen(8080, () => {
  console.log("Server started on port: 8080");
});
