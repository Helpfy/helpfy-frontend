import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME, REGISTER } from "./constants";
import RulesPage from "./pages/RulesPage";
import RegisterPage from "./pages/RegisterPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={HOME.route} element={<RulesPage />} />
        <Route exact path={REGISTER.route} element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
