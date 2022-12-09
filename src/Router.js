import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME, REGISTER, RULES } from "./constants";
import RulesPage from "./pages/RulesPage";
import AnswersListPage from "./pages/AnswersListPage";
import RegisterPage from "./pages/RegisterPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={HOME.route} element={<AnswersListPage />} />
        <Route exact path={RULES.route} element={<RulesPage />} />
        <Route exact path={REGISTER.route} element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
