import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import AppRoutes from "../AppRoutes";
import { Link } from "react-router-dom";

export const NavMenu = (props) => {
  const [authenticate, setAuthenticate] = React.useState(false);

  const handleDrawerToggle = () => {

  };

  return (
    <AppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            Demo FullStack
          </Link>
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {authenticate ? <SignedInRoutes /> : <SignedOutRoutes />}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const SignedInRoutes = () => {
  return (
    <>
      {AppRoutes
        .filter((r) => !["/login", "/register", "/"].includes(r.path))
        .map((item, index) => (
          <Link key={index} style={{ textDecoration: "none" }} to={item.path}>
            <Button sx={{ color: "#fff" }}>{item.name}</Button>
          </Link>
        ))}
    </>
  );
};

const SignedOutRoutes = () => {
  return (
    <>
      {AppRoutes
        .filter((r) => !["/dashboard"].includes(r.path))
        .map((item, index) => (
          <Link key={index} style={{ textDecoration: "none" }} to={item.path}>
            <Button sx={{ color: "#fff" }}>{item.name}</Button>
          </Link>
        ))}
    </>
  );
};
