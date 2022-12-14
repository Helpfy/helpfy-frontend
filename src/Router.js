import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME, PROFILE, REGISTER, RULES, SIGN_IN, NEW_ASK } from "./constants";
import RulesPage from "./pages/RulesPage";
import AnswersListPage from "./pages/AnswersListPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import CreateQuestionPage from "./pages/CreateQuestionPage";
import { AuthContext } from "./context/AuthContext";

export default function Router() {
  const { user } = useContext(AuthContext);

  const signRoutes = () => {
    return (
      <>
        <Route exact path={NEW_ASK.route} element={<CreateQuestionPage />} />
        <Route exact path={PROFILE.route} element={<ProfilePage />} />
      </>
    );
  };

  const otherRoutes = () => {
    return (
      <>
        <Route exact path={HOME.route} element={<AnswersListPage />} />
        <Route exact path={RULES.route} element={<RulesPage />} />
        <Route exact path={REGISTER.route} element={<RegisterPage />} />
        <Route exact path={SIGN_IN.route} element={<LoginPage />} />
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        {user && signRoutes()}
        {otherRoutes()}
      </Routes>
    </BrowserRouter>
  );
}
