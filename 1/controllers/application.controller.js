import {
  ApplicationPostResponseModel,
  ApplicationResponseModel,
  ApplicationsResponseModel,
} from "../model/application.models.js";
import { ApplicationService } from "../services/application.service.js";
import express from "express";

export class ApplicationController {
  constructor() {
    this.router = express.Router();
    this.service = new ApplicationService();

    this.router.post("/create", async (req, res) => {
      try {
        if ("applicationName" in req.body == false) {
          res.status(400).send("Conflict body");
        }

        const current = await this.service.createApp(req.body);

        const response = new ApplicationPostResponseModel();
        response.applicationId = current.applicationId;

        res.status(201).send(response);
      } catch (err) {
        res.status(500).send("Internal server error");
      }
    });

    this.router.get("/apps", async (_, res) => {
      try {
        const currents = await this.service.getApps();

        const response = new ApplicationsResponseModel();
        response.applications = currents;

        res.status(200).send(response);
      } catch (err) {
        res.status(500).send("Internal server error");
      }
    });

    this.router.get("/app/:uuid", async (req, res) => {
      try {
        const uuid = req.params.uuid;

        const current = await this.service.getAppByUUID(uuid);

        if (!current) {
          res.status(404).send("Not found.");
        }

        const response = new ApplicationResponseModel();
        response.application = current;

        res.status(200).send(response);
      } catch (err) {
        res.status(500).send("Internal server error");
      }
    });

    this.router.put("/app/:uuid", async (req, res) => {
      try {
        const uuid = req.params.uuid;
        const current = await this.service.updateApp(uuid, req.body);

        const response = new ApplicationResponseModel();
        response.application = current;

        res.status(200).send(response);
      } catch (err) {
        res.status(500).send("Internal server error");
      }
    });

    this.router.delete("/app/:uuid", async (req, res) => {
      try {
        const uuid = req.params.uuid;
        await this.service.deleteApp(uuid);
        res.status(200).send();
      } catch (err) {
        res.status(500).send("Internal server error");
      }
    });

    return this.router;
  }
}
