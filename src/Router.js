import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ASKS, REGISTER, RULES, SIGN_IN, ASK, NEW_ASK } from "./constants";

import RulesPage from "./pages/RulesPage";
import AsksListPage from "./pages/AsksListPage";
import AskPage from "./pages/AskPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateQuestionPage from "./pages/CreateQuestionPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AsksListPage />} />
        <Route exact path={ASKS.route} element={<AsksListPage />} />
        <Route exact path={REGISTER.route} element={<RegisterPage />} />
        <Route exact path={NEW_ASK.route} element={<CreateQuestionPage />} />
        <Route exact path={SIGN_IN.route} element={<LoginPage />} />
        <Route exact path={ASK.route} element={<AskPage />} />
        <Route exact path={RULES.route} element={<RulesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
