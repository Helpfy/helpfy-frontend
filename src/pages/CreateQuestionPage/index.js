import React from "react";

import BasePage from "../BasePage";
import InputTags from "../../components/InputTags";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";

export default function CreateQuestionPage() {
  const [title, setTitle] = React.useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <BasePage pageName="Create Question">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Stack sx={{ width: "80%" }} spacing={1}>
          <InputTags />
          <FormControl>
            <InputLabel htmlFor="title-component">Title</InputLabel>
            <OutlinedInput
              sx={{ background: "#393E41" }}
              id="title-component"
              value={title}
              onChange={handleChange}
              label="Tag"
            />
          </FormControl>
        </Stack>
      </Box>
    </BasePage>
  );
}
