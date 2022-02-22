import "./App.css";
import { useState } from "react";
import * as React from "react";
// import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Header from "./components/Header";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} style={{ borderRadius: "0", Height: "100%" }}>
        <div className="App">
          <Header mode={mode} setMode={setMode} />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact mode={mode} />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
