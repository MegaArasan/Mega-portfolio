import "./App.css";
import { Toolbar, Button, Link, AppBar, Typography } from "@mui/material";
import { useState } from "react";
// import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";

function App() {
  const [mode, setMode] = useState("light");
  const toggleColorMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const [opened, setopened] = useState(false);
  const handleDrawerOpen = () => {
    setopened(true);
  };
  const handleDrawerClose = () => {
    setopened(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} style={{ borderRadius: "0", Height: "100%" }}>
        <div className="App">
          <AppBar position="static" color="transparent">
            <Toolbar variant="regular">
              <Typography variant="h4" sx={{ fontFamily: "Roboto" }}>
                MEGA
              </Typography>
              <Button
                sx={{
                  ml: "auto",
                  height: "3rem",
                  display: { xs: "none", sm: "block" },
                }}
              >
                <a data-scroll href="#home">
                  Home
                </a>
              </Button>
              <Button
                sx={{ color: "inherit", display: { xs: "none", sm: "block" } }}
              >
                <a data-scroll href="#skills">
                  Skills
                </a>
              </Button>
              <Button
                sx={{ height: "3rem", display: { xs: "none", sm: "block" } }}
              >
                <a data-scroll href="#projects">
                  Projects
                </a>
              </Button>
              <Button
                sx={{ height: "3rem", display: { xs: "none", sm: "block" } }}
              >
                <a data-scroll href="#about">
                  About
                </a>
              </Button>
              <Button
                sx={{ height: "3rem", display: { xs: "none", sm: "block" } }}
              >
                <a data-scroll href="#education">
                  Education
                </a>
              </Button>
              <Button
                sx={{ height: "3rem", display: { xs: "none", sm: "block" } }}
              >
                <a data-scroll href="#contact">
                  Contact
                </a>
              </Button>
              <Button
                color="inherit"
                sx={{ height: "3rem", display: { xs: "none", sm: "block" } }}
              >
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
              <IconButton
                onClick={toggleColorMode}
                color="inherit"
                sx={{ ml: { xs: "auto", sm: "0" } }}
              >
                {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
              <IconButton
                onClick={handleDrawerOpen}
                color="inherit"
                sx={{ display: { xs: "block", sm: "none" } }}
              >
                <MenuIcon />
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
                  <a data-scroll href="#about">
                    About
                  </a>
                </Button>
                <Button sx={{ height: "3rem" }}>
                  <a data-scroll href="#education">
                    Education
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
            </Toolbar>
          </AppBar>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
