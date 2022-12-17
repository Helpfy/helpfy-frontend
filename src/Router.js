import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { 
  ASKS,
  REGISTER,
  RULES,
  SIGN_IN,
  ASK,
  NEW_ASK,
  PROFILE
} from "./constants";

import RulesPage from "./pages/RulesPage";
import AsksListPage from "./pages/AsksListPage";
import AskPage from "./pages/AskPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import CreateQuestionPage from "./pages/CreateQuestionPage";
import { AuthContext } from "./context/AuthContext";
import NotFoundPage from "./pages/NotFoundPage";

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
        <Route index element={<AsksListPage />} />
        <Route exact path={ASKS.route} element={<AsksListPage />} />
        <Route exact path={ASK.route} element={<AskPage />} />
        <Route exact path={RULES.route} element={<RulesPage />} />
        {!user && (
          <>
            <Route exact path={REGISTER.route} element={<RegisterPage />} />
            <Route exact path={SIGN_IN.route} element={<LoginPage />} />
          </>
        )}
        <Route path="/*" element={<NotFoundPage />} />
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
