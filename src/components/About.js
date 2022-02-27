import React from "react";
import { Typography, Button, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

function About() {
  return (
    <section id="about" className="about">
      <Typography
        sx={{
          ml: { xs: "none", sm: "25px", md: "35px" },
          fontSize: { xs: "25px", sm: "35px" },
        }}
        variant="h4"
        color="inherit"
        className="headtitle"
      >
        ABOUT
      </Typography>
      <div className="abtpage">
        <div className="abttxt">
          <Typography
            variant="p"
            sx={{
              fontSize: { xs: "20px", sm: "25px", md: "32px" },
              color: "inherit",
            }}
          >
            &emsp; &emsp; &emsp; Hello! I am a Fresher located in Tenkasi.
            Having a piece of good knowledge in both frontend and backend
            development. Dedicated to creating and developing good UI, and
            responsive web applications, Exposure to full stack web development.
            I love to design and develop something new.
          </Typography>
          <br />
          <Typography
            variant="p"
            sx={{
              fontSize: { xs: "20px", sm: "25px", md: "32px" },
              color: "inherit",
            }}
          >
            &emsp; &emsp; &emsp; I'm interested in building and developing full
            stack application using MERN stack and interested to working on
            projects to learn something new about web development and to gain
            more experience.
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "5px",
          }}
        >
          <Button
            target="_blank"
            variant="outlined"
            href="https://github.com/megaarasan"
            color="inherit"
            sx={{
              // height: "2.5rem",
              borderRadius: "10px",
              backgroundColor: "#8e838366",
            }}
          >
            <GitHubIcon fontSize="large" />
          </Button>
          <Button
            href="mailto:megaarasan2000@gmail.com"
            variant="outlined"
            target="_blank"
            color="inherit"
            sx={{
              // height: "2.5rem",
              ml: "15px",
              borderRadius: "10px",
              backgroundColor: "#8e838366",
            }}
          >
            <EmailIcon fontSize="large" />
          </Button>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "15px" }}
        >
          <Button
            color="inherit"
            variant="outlined"
            sx={{
              height: "2.5rem",
              width: "150px",
              borderRadius: "10px",
              backgroundColor: "#8e838366",
            }}
          >
            <Link
              color="inherit"
              target="_blank"
              underline="none"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1b-uzNJ0_6H_wqnAdjoeXaNFI8CsHYLv0/view?usp=sharing"
            >
              <b>RESUME</b>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default About;
