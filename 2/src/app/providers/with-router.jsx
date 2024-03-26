import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { RouterConfig } from "../router/config.js";
import { Preloader } from "../../widgets/preloader/preloader.component.jsx";

export const withRouter = (component) => () =>
  (
    <BrowserRouter {...RouterConfig}>
      <Suspense fallback={<Preloader />}>{component()}</Suspense>
    </BrowserRouter>
  );
