import React from "react";
// import { Link } from "react-router-dom";
import Logo from "../../pages/Logo";
import { AppBar, Toolbar, Container, MenuItem, Link } from "@mui/material";

export default function Nav({ LinkArray }) {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Logo />
          {LinkArray?.map((link) => (
            <MenuItem key={link.id}>
              <Link
                marginX={3}
                href={link.path}
                color="inherit"
                underline="none"
              >
                {link.label}
              </Link>
            </MenuItem>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
