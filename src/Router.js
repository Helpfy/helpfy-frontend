import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME, REGISTER, RULES, SIGN_IN, NEW_ASK } from "./constants";
import RulesPage from "./pages/RulesPage";
import AnswersListPage from "./pages/AnswersListPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateQuestionPage from "./pages/CreateQuestionPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={HOME.route} element={<AnswersListPage />} />
        <Route exact path={RULES.route} element={<RulesPage />} />
        <Route exact path={REGISTER.route} element={<RegisterPage />} />
        <Route exact path={NEW_ASK.route} element={<CreateQuestionPage />} />
        <Route exact path={SIGN_IN.route} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
