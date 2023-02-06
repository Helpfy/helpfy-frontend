import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import rehypeSanitize from "rehype-sanitize";
import InputTags from "../../components/InputTags";
import { useSnackbar } from "notistack";
import { QuestionService } from "../../services/question";
import { AuthContext } from "../../context/AuthContext";

export default function CreateQuestionForm() {
  const [title, setTitle] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [tags, setTags] = useState([]);

  const { user, token } = useContext(AuthContext);

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const goToQuestionsPage = (questionId) => {
    navigate(`/ask/${questionId}`);
  };

  const handleTagDelete = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleTagAdd = (newTag) => {
    if (newTag === "") {
      const msg = "A tag não pode ser vazia.";
      enqueueSnackbar(msg, { variant: "error" });
      return;
    }
    if (tags.includes(newTag)) {
      const msg = "Tag já existe.";
      enqueueSnackbar(msg, { variant: "error" });
      return;
    }
    setTags([...tags, newTag]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      title: title,
      tags: tags,
      body: questionText,
    };
    setLoading(true);
    QuestionService.createQuestion(user, body, token)
      .then((response) => {
        const msg =
          response.status === 201 ? "Questão criada com sucesso." : "";
        enqueueSnackbar(msg, { variant: "success" });
        goToQuestionsPage(response.data.id);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        const msg = err.response.data.message;
        enqueueSnackbar(msg, { variant: "error" });
      });
  };

  return loading ? (
    <CircularProgress />
  ) : (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Stack sx={{ width: "80%" }} spacing={1}>
        <InputTags
          values={tags}
          handleDelete={handleTagDelete}
          handleAdd={handleTagAdd}
        />
        <FormControl>
          <InputLabel
            sx={{ color: "#F0F0F0" }}
            htmlFor="title-component"
            focused={false}
          >
            Title
          </InputLabel>
          <OutlinedInput
            sx={{ background: "#393E41", color: "#F0F0F0" }}
            id="title-component"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="Tag"
          />
        </FormControl>
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
        >
          Enviar
        </Button>
      </Stack>
    </Box>
  );
}
