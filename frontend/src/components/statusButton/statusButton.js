import React from "react";
import { useState } from "react";
import { Container, Menu, MenuItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function StatusButton({ ProductStatus }) {
  const changedStatus = () => {
    if ({ ProductStatus }.ProductStatus === "active") return "archive";
    else {
      return "active";
    }
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <IconButton
        sx={{
          ml: "80px",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        sx={{ transform: "translateX(2%) translateY(-13%)" }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>{changedStatus()}</MenuItem>
      </Menu>
    </Container>
  );
}
