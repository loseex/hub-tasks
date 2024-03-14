import { DbService } from "./db.service.js";

import { ApplicationModel } from "../model/application.models.js";
import { uuidv7 } from "uuidv7";

export class ApplicationService {
  constructor() {
    this.dbService = new DbService("./db/applications.json");
  }

  async getApps() {
    try {
      return await this.dbService.get();
    } catch (err) {
      throw new Error(err);
    }
  }

  async getAppByUUID(uuid) {
    try {
      const response = await this.dbService.getByUUID(uuid);
      return response;
    } catch (err) {
      throw new Error(err);
    }
  }

  async createApp(object) {
    const current = new ApplicationModel();

    current.applicationId = uuidv7();
    current.applicationName = object.applicationName;
    current.createDate = new Intl.DateTimeFormat("ru-RU").format(
      new Date(Date.now())
    );

    return this.dbService.create(current);
  }

  async deleteApp(uuid) {
    try {
      return await this.dbService.delete(uuid);
    } catch (err) {
      throw new Error(err);
    }
  }

  async updateApp(uuid, body) {
    try {
      return await this.dbService.update(uuid, body);
    } catch (err) {
      throw new Error(err);
    }
  }
}
