import React, { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Fade from "@mui/material/Fade";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Tag from "../Tag";
import { Button } from "@mui/material";

export default function InputTags({ values, handleAdd, handleDelete }) {
  const [newTag, setNewtag] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <Fade in={values.length >= 1}>
        <Stack
          sx={{
            padding: "5px",
            display: "flex",
            flexWrap: "wrap",
          }}
          direction="row"
          spacing={1}
        >
          {values.map((tag, index) => (
            <Tag key={index} name={tag} onDelete={handleDelete} />
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
          <InputLabel
            htmlFor="tag-component"
            sx={{ color: "#F0F0F0" }}
            focused={false}
          >
            Tag
          </InputLabel>
          <OutlinedInput
            sx={{ background: "#393E41", color: "#F0F0F0" }}
            id="tag-component"
            value={newTag}
            onChange={(e) => setNewtag(e.target.value)}
            label="Tag"
          />
        </FormControl>
        <Button
          variant="contained"
          sx={{
            color: "#F0F0F0",
            "&:hover": {
              background: "#217CCB",
              filter: "brightness(85%)",
            },
          }}
          onClick={() => {
            handleAdd(newTag);
            setNewtag("");
          }}
        >
          Add
        </Button>
      </Stack>
    </Box>
  );
}
