import Chip from "@mui/material/Chip";

export default function Tag({ name, onDelete }) {
  return (
    <Chip
      label={name}
      variant="outlined"
      onDelete={() => onDelete(name)}
      sx={{ background: "#217CCB", color: "#F0F0F0" }}
    />
  );
}
