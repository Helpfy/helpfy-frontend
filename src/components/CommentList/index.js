import React from "react";

import Box from "@mui/material/Box";

import CommentCard from "../CommentCard";

export default function CommentList({ comments }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {comments.map((comment, i) => (
        <CommentCard user={comment.author.name} text={comment.body} key={i} />
      ))}
    </Box>
  );
}
