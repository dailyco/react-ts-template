import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

const routes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default routes;
