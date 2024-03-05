import { uuidv7 } from "uuidv7";
import {
  ApplicationErrorMessageModel,
  ApplicationModel,
  ApplicationPostResponseModel,
  ApplicationsResponseModel,
} from "../model/application.models.js";

export class ApplicationService {
  async createApp(req, res) {
    try {
      const current = new ApplicationModel();

      current.applicationName = req.body.applicationName;
      current.applicationId = uuidv7();
      current.createDate = new Date().getUTCDate();

      const response = new ApplicationPostResponseModel();
      response.applicationId = current.applicationId;

      res.send(response);
    } catch (err) {
      throw new Error(err);
    }
  }

  async getApps(req, res) {
    try {
      const response = new ApplicationsResponseModel();
      response.applications = [];
      res.send(response);
    } catch (err) {
      throw new Error(err);
    }
  }

  async getAppByUUID(req, res) {
    try {
      const uuid = req.params.uuid;

      res.send(uuid);
    } catch (err) {
      throw new Error(err);
    }
  }
}
