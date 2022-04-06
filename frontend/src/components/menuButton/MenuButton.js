// import React from "react";
import { useState } from "react";
import { Container, Menu, MenuItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function MenuButton({ Product }) {
  const status = Product.statusValue === "active" ? "archive" : "active";

  const { id } = Product;
  const changedStatus = async () => {
    const product = {
      statusValue: status,
    };
    const url = `http://localhost:8080/api/products/statusUpdate/${id}`;
    const fetchData = {
      method: "PATCH",
      body: JSON.stringify(product),
      headers: { "Content-Type": "application/json" },
    };
    const request = async () => {
      const res = await fetch(url, fetchData);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Something was wrong");
      }
      return alert(data);
    };

    try {
      if (product) {
        request();
      }
    } catch (error) {
      return error.message;
    }
    setAnchorEl(null);
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
        <MenuItem onClick={changedStatus}>{status}</MenuItem>
      </Menu>
    </Container>
  );
}
