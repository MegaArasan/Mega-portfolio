import React, { useState } from "react";
import { Button, Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import meglogo from "../assets/meglogo.png";

function Header() {
  const [opened, setopened] = useState(false);
  const handleDrawerOpen = () => {
    setopened(true);
  };
  const handleDrawerClose = () => {
    setopened(false);
  };
  return (
    <div className="navbar">
      <img src={meglogo} alt="meglogo" className="meglogo" />
      <div className="nav-btn">
        <Button
          className="navbtn"
          sx={{
            // ml: "10rem",
            height: "2.5rem",
            display: { xs: "none", sm: "block" },
          }}
        >
          <a data-scroll href="#home">
            Home
          </a>
        </Button>
        <Button
          className="navbtn"
          sx={{ height: "2.5rem", display: { xs: "none", sm: "block" } }}
        >
          <a data-scroll href="#about">
            About
          </a>
        </Button>
        <Button
          className="navbtn"
          sx={{ color: "inherit", display: { xs: "none", sm: "block" } }}
        >
          <a data-scroll href="#skills">
            Skills
          </a>
        </Button>
        <Button
          className="navbtn"
          sx={{ height: "2.5rem", display: { xs: "none", sm: "block" } }}
        >
          <a data-scroll href="#projects">
            Projects
          </a>
        </Button>

        <Button
          className="navbtn"
          sx={{ height: "2.5rem", display: { xs: "none", sm: "block" } }}
        >
          <a data-scroll href="#education">
            Education
          </a>
        </Button>
        <Button
          className="navbtn"
          sx={{ height: "2.5rem", display: { xs: "none", sm: "block" } }}
        >
          <a data-scroll href="#contact">
            Contact
          </a>
        </Button>
        <Button
          className="navbtn"
          color="inherit"
          sx={{
            height: "2.5rem",
            display: { xs: "none", sm: "block" },
            borderRadius: "10px",
          }}
        >
          <Link
            // color="inherit"
            target="_blank"
            underline="none"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1b-uzNJ0_6H_wqnAdjoeXaNFI8CsHYLv0/view?usp=sharing"
          >
            RESUME
          </Link>
        </Button>
        <IconButton
          onClick={handleDrawerOpen}
          color="inherit"
          sx={{ ml: "auto", display: { xs: "block", sm: "none" } }}
          className="menubtn"
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer
          sx={{
            width: "200px",
            height: "100%",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: "200px",
              height: "100%",
              boxSizing: "border-box",
              backgroundColor: "#fff",
              color: "black",
              fontSize: "1em",
              fontFamily: "Pacifico",
            },
          }}
          anchor="right"
          open={opened}
          onClose={handleDrawerClose}
        >
          <IconButton
            color="inherit"
            aria-label="close"
            component="span"
            onClick={handleDrawerClose}
            sx={{ ml: "auto" }}
          >
            <CloseIcon />
          </IconButton>
          <Button
            sx={{
              height: "3rem",
            }}
          >
            <a data-scroll href="#home">
              Home
            </a>
          </Button>
          <Button sx={{ height: "3rem" }}>
            <a data-scroll href="#about">
              About
            </a>
          </Button>
          <Button sx={{ height: "3rem" }}>
            <a data-scroll href="#education">
              Education
            </a>
          </Button>
          <Button sx={{ color: "inherit" }}>
            <a data-scroll href="#skills">
              Skills
            </a>
          </Button>
          <Button sx={{ height: "3rem" }}>
            <a data-scroll href="#projects">
              Projects
            </a>
          </Button>
          <Button sx={{ height: "3rem" }}>
            <a data-scroll href="#contact">
              Contact
            </a>
          </Button>
          <Button color="inherit" sx={{ height: "3rem" }}>
            <Link
              color="inherit"
              target="_blank"
              underline="none"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1b-uzNJ0_6H_wqnAdjoeXaNFI8CsHYLv0/view?usp=sharing"
            >
              RESUME
            </Link>
          </Button>
        </Drawer>
      </div>
    </div>
  );
}

export default Header;
