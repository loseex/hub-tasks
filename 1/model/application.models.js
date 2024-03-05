import { uuidv7 } from "uuidv7";

export class ApplicationModel {
  applicationName = ""; /** @string */
  createDate = ""; /** @Date */
  applicationId = ""; /** @uuidv7 */
}

export class ApplicationPostResponseModel {
  applicationId = uuidv7();
}

export class ApplicationsResponseModel {
  applications = []; /** @ApplicationModel [] */
}

export class ApplicationResponseModel {
  application = null; /** @ApplicationModel */
}

export class ApplicationPutModel {
  applicationName = null; /** @string */
}

export class ApplicationDeleteResponseModel {
  success = null; /** @boolean */
}

export class ApplicationErrorMessageModel {
  constructor(message) {
    this.message = message;

    return this;
  }
}
