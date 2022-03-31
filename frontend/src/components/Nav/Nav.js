import React from "react";
import Logo from "../../pages/Logo";
import { AppBar, Toolbar, Container, MenuItem, Link } from "@mui/material";

export default function Nav({ LinkArray }) {
  return (
    <AppBar position="static">
      <Toolbar sx={{ mr: "33%", mb: "-3px" }}>
        <Container>
          <Logo />
        </Container>
        {LinkArray?.map((link) => (
          <MenuItem key={link.id}>
            <Link marginX={5} href={link.path} color="inherit" underline="none">
              {link.label}
            </Link>
          </MenuItem>
        ))}
      </Toolbar>
    </AppBar>
  );
}
