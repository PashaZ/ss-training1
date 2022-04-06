import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectStatus({ onSelect }) {
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    onSelect(event.target.value);
  };

  const eventClick = (event) => {
    const { value } = event.target;
    onSelect(value);
    setStatus(value);
  };

  return (
    <Box sx={{ minWidth: 180, mb: 10 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value="active" onClick={eventClick}>
            Active
          </MenuItem>
          <MenuItem value="archive" onClick={eventClick}>
            Archive
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
