import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const AppsListView = lazy(() => import("./apps-list/apps-list.view"));
const AppPageView = lazy(() => import("./app-page/app-page.view"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<AppsListView />} />
      <Route path="/:uuid" element={<AppPageView />} />
    </Routes>
  );
};
