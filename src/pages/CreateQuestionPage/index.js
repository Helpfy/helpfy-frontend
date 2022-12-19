import React from "react";

import BasePage from "../BasePage";
import CreateQuestionForm from "./form";

export default function CreateQuestionPage() {
  return (
    <BasePage pageName="Create Question">
      <CreateQuestionForm />
    </BasePage>
  );
}
