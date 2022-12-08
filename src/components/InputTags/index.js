import React from "react";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Fade from "@mui/material/Fade";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Tag from "../Tag";
import ButtonBG from "../ButtonBG";

export default function InputTags() {
  const [tags, setTags] = React.useState([]);
  const [newTag, setNewtag] = React.useState("");

  const handleDelete = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleAdd = (newTag) => {
    setTags([...tags, newTag]);
    setNewtag("");
  };

  const handleChange = (event) => {
    setNewtag(event.target.value);
  };

  return (
    <Box>
      <Fade in={tags.length >= 1}>
        <Stack
          sx={{
            background: "#393E41",
            width: "fit-content",
            gap: "5px",
            padding: "5px",
            "border-radius": "10px",
          }}
          direction="row"
          spacing={1}
        >
          {tags.map((tag) => (
            <Tag name={tag} onDelete={handleDelete} />
          ))}
        </Stack>
      </Fade>

      <FormControl>
        <InputLabel htmlFor="tag-component">Tag</InputLabel>
        <OutlinedInput
          id="tag-component"
          value={newTag}
          onChange={handleChange}
          label="Tag"
        />
      </FormControl>
      <ButtonBG text="Add" onClick={() => handleAdd(newTag)} />
    </Box>
  );
}
