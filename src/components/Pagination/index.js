import { Pagination, Box } from "@mui/material";

export default function BasicPagination({ count, page, color, onChange }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Pagination
        sx={{
          ul: {
            "& .MuiPaginationItem-root": {
              color: "#f0f0f0",
            },
            "& .Mui-selected": {
              background: "#1976D2",
            },
          },
        }}
        count={count}
        page={page}
        color={color}
        onChange={onChange}
        shape="rounded"
      />
    </Box>
  );
}
