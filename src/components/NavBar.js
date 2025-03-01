import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Link } from "react-router-dom";

const navItems = ["Account"];

const Navbar = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <AppBar component="nav">
        <Toolbar>
          <Box sx={{ display: "flex", mr: "auto" }}>
            <Link
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                color: "#fff",
                textDecoration: "none",
              }}
              to="/"
            >
              Netflux
            </Link>
          </Box>
          <Box sx={{ display: "block" }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
