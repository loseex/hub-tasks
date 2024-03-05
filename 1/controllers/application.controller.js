import { ApplicationService } from "../services/application.service.js";
import express from "express";

export class ApplicationController {
  constructor() {
    this.router = express.Router();
    this.service = new ApplicationService();

    this.router.post("/create", this.service.createApp);
    this.router.get("/apps", this.service.getApps);
    this.router.get("/app/:uuid", this.service.getAppByUUID);

    return this.router;
  }
}
