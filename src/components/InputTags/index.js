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
    if (newTag !== "" && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewtag("");
    }
  };

  const handleChange = (event) => {
    setNewtag(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        "flex-direction": "column",
        gap: "1em",
      }}
    >
      <Fade in={tags.length >= 1}>
        <Stack
          sx={{
            padding: "5px",
            display: "flex",
            "flex-wrap": "wrap",
          }}
          direction="row"
          spacing={1}
        >
          {tags.map((tag) => (
            <Tag name={tag} onDelete={handleDelete} />
          ))}
        </Stack>
      </Fade>

      <Stack
        direction="row"
        sx={{
          gap: "5px",
        }}
        spacing={1}
      >
        <FormControl sx={{ width: "100%" }}>
          <InputLabel htmlFor="tag-component">Tag</InputLabel>
          <OutlinedInput
            sx={{ background: "#393E41" }}
            id="tag-component"
            value={newTag}
            onChange={handleChange}
            label="Tag"
          />
        </FormControl>
        <ButtonBG text="Add" onClick={() => handleAdd(newTag)} />
      </Stack>
    </Box>
  );
}
