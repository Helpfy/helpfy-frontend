import React, { useState } from "react";

import {
  Typography,
  Box,
  Button,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

export default function CardContent({
  titleProps,
  tldr,
  isEditing,
  editContent,
  cancelEdit,
}) {
  const [title, setTitle] = useState(titleProps);
  const [questionText, setQuestionText] = useState(tldr);
  const [resetObj, setResetObj] = useState({
    title: titleProps,
    questionText: tldr,
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      {!isEditing || !titleProps ? (
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            color: "#F0F0F0",
          }}
        >
          {title}
        </Typography>
      ) : (
        <FormControl>
          <OutlinedInput
            sx={{ background: "#F0F0F0" }}
            id="title-component"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
      )}
      <Box sx={!isEditing ?? { "& *": { color: "#F0F0F0" } }}>
        {!isEditing ? (
          <ReactMarkdown children={questionText} />
        ) : (
          <>
            <MDEditor
              value={questionText}
              onChange={setQuestionText}
              previewOptions={{
                rehypePlugins: [[rehypeSanitize]],
              }}
              visibleDragbar={false}
              highlightEnable={false}
              height={250}
            />
            <Button
              sx={{
                mt: 3,
                mb: 2,
                color: "#F0F0F0",
                "&:hover": {
                  background: "#696969",
                  filter: "brightness(85%)",
                },
              }}
              onClick={() => {
                setTitle(resetObj.title);
                setQuestionText(resetObj.questionText);
                cancelEdit();
              }}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                color: "#F0F0F0",
                "&:hover": {
                  background: "#217CCB",
                  filter: "brightness(85%)",
                },
              }}
              onClick={(event) => {
                setResetObj({ title: title, questionText: questionText });
                editContent(event, questionText, title);
              }}
            >
              Enviar
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}
