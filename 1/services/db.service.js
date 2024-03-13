/**
 * Тут работаем с db/applications.json
 * удаляем данные
 * заполняем данными
 * изменяем данные
 */

import fs from "fs";

export class DbService {
  constructor(path) {
    this.path = path;
  }

  get() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.path, "utf-8", (err, data) => {
        if (err) reject(err);
        else resolve(JSON.parse(data));
      });
    });
  }

  save(data) {
    try {
      return new Promise((resolve, reject) => {
        fs.writeFile(
          this.path,
          JSON.stringify(data, null, 2),
          "utf-8",
          (err) => {
            if (err) reject(err);
            else resolve();
          }
        );
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async getByUUID(uuid) {
    try {
      const data = await this.get();

      const current = data.filter((i) => i.applicationId == uuid);

      return current[0];
    } catch (err) {
      throw new Error(err);
    }
  }

  async create(object) {
    try {
      const current = await this.get();
      current.push(object);

      await this.save(current);

      return object;
    } catch (err) {
      throw new Error(err);
    }
  }

  async delete(uuid) {
    try {
      const current = await this.get();
      this.save(current.filter((i) => i.applicationId !== uuid));
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(uuid, body) {
    try {
      let data = await this.get();

      const index = data.findIndex((item) => item.applicationId === uuid);
      data.splice(index, 1, { ...body });

      await this.save(data);
    } catch (err) {
      throw new Error(err);
    }
  }
}
