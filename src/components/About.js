import React from "react";
import { Typography } from "@mui/material";

function About() {
  return (
    <section id="about" className="about">
      <Typography
        sx={{
          ml: { xs: "none", sm: "25px" },
          fontSize: { xs: "25px", sm: "35px" },
        }}
        variant="h4"
        color="inherit"
        className="headtitle"
      >
        ABOUT
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: { xs: "20px", sm: "25px" },
            color: "inherit",
            margin: { xs: "10px", sm: "15px", md: "0 8rem 5rem 8rem" },
            textAlign: "justify",
          }}
        >
          Hello! I am a Fresher located in Tenkasi. Having a good knowledge in
          both frontend and backend development. Dedicated to creating and
          developing good UI, and responsive web applications, Exposure to full
          stack web development. I love to design and develop something new.
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: { xs: "20px", sm: "25px" },
            color: "inherit",
            margin: { xs: "10px", sm: "15px", md: "0 8rem 5rem 8rem" },
            textAlign: "justify",
          }}
        >
          I'm interested in building and developing full stack application using
          MERN stack and interested to working on projects to learn something
          new about web development and to gain more experience.
        </Typography>
      </div>
    </section>
  );
}

export default About;
