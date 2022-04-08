import React from "react";
import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ProductContext } from "../../productsContext";

export default function FilterProducts() {
  const { getFilterProducts } = useContext(ProductContext);
  const [status, setStatus] = useState("");

  const choseStatus = (event) => {
    const { value } = event.target;
    getFilterProducts(value);
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
          onChange={choseStatus}
        >
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="archive">Archive</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
