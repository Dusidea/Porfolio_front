import { AppBar, Toolbar, Button, Link, collapseClasses } from "@mui/material";
import NavButton from "./NavButton";

export default function Nav() {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{}}>
        <NavButton href="#about">À propos</NavButton>
        <NavButton href="#services">Services</NavButton>
      </Toolbar>
    </AppBar>
  );
}
