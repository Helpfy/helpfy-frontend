import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RulesPage from "./pages/RulesPage";
import AnswersListPage from "./pages/AnswersListPage";
import CreateQuestionPage from "./pages/CreateQuestionPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/rules" element={<RulesPage />} />
        <Route exact path="/" element={<AnswersListPage />} />
        <Route exact path="/create-question" element={<CreateQuestionPage />} />
      </Routes>
    </BrowserRouter>
  );
}
