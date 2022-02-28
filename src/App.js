import "./App.css";
import * as React from "react";
// import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
