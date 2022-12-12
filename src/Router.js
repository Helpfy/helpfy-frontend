import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME, REGISTER, RULES, SIGN_IN, ASK } from "./constants";
import RulesPage from "./pages/RulesPage";
import AsksListPage from "./pages/AsksListPage";
import AskPage from "./pages/AskPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={RULES.route} element={<RulesPage />} />
        <Route exact path={REGISTER.route} element={<RegisterPage />} />
        <Route exact path={SIGN_IN.route} element={<LoginPage />} />
        <Route exact path={HOME.route} element={<AsksListPage />}/>        
        <Route exact path={ASK.route} element={<AskPage />}/>        
      </Routes>
    </BrowserRouter>
  );
}
