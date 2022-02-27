import React from "react";
import Typography from "@mui/material/Typography";
import css3 from "../assets/icons/css3.png";
import html from "../assets/icons/html.png";
import javascript from "../assets/icons/javascript.png";
import reactjs from "../assets/icons/reactjs.png";
import express from "../assets/icons/express.png";
import mongodb from "../assets/icons/mongodb.png";
import material from "../assets/icons/material.png";
import nodejs from "../assets/icons/nodejs.png";
import vscode from "../assets/icons/vscode.png";
import postman from "../assets/icons/postman.png";
import heroku from "../assets/icons/heroku.png";
import netlify from "../assets/icons/netlify.png";

function Skills() {
  return (
    <div id="skills" className="skills">
      <Typography
        sx={{
          ml: { xs: "10px", sm: "25px" },
          fontSize: { xs: "25px", sm: "35px" },
        }}
        variant="h4"
        color="inherit"
        className="headtitle"
      >
        PROFESSIONAL SKILLS
      </Typography>
      <div className="skillset">
        <div className="setlogo">
          <img src={css3} alt="css" height="100px" />
          <Typography color="inherit" variant="h6">
            CSS
          </Typography>
        </div>
        <div className="setlogo">
          <img src={html} alt="html" height="100px" />
          <Typography color="inherit" variant="h6">
            HTML
          </Typography>
        </div>
        <div className="setlogo">
          <img src={javascript} alt="javascript" height="100px" />
          <Typography color="inherit" variant="h6">
            Javascript
          </Typography>
        </div>
        <div className="setlogo">
          <img src={reactjs} alt="reactjs" height="100px" />
          <Typography color="inherit" variant="h6">
            React Js
          </Typography>
        </div>

        <div className="setlogo">
          <img src={mongodb} alt="mongodb" height="100px" />
          <Typography color="inherit" variant="h6">
            Mongo DB
          </Typography>
        </div>
        <div className="setlogo">
          <img src={express} alt="express" height="100px" width="150px" />
          <Typography color="inherit" variant="h6">
            Express Js
          </Typography>
        </div>
        <div className="setlogo">
          <img src={nodejs} alt="nodejs" height="100px" />
          <Typography color="inherit" variant="h6">
            Node Js
          </Typography>
        </div>
        <div className="setlogo">
          <img src={material} alt="material" height="100px" />
          <Typography color="inherit" variant="h6">
            Material UI
          </Typography>
        </div>
      </div>
      <Typography
        color="inherit"
        sx={{
          ml: { xs: "none", sm: "25px" },
          fontSize: { xs: "25px", sm: "35px" },
        }}
        variant="h4"
        className="headtitle"
      >
        TOOLS
      </Typography>
      <div className="skillset">
        <div className="setlogo">
          <img src={vscode} alt="vscode" height="100px" />
          <Typography color="inherit" variant="h6">
            VS Code
          </Typography>
        </div>
        <div className="setlogo">
          <img src={postman} alt="postman" height="100px" />
          <Typography color="inherit" variant="h6">
            Postman
          </Typography>
        </div>
        <div className="setlogo">
          <img src={heroku} alt="heroku" height="100px" />
          <Typography color="inherit" variant="h6">
            Heroku
          </Typography>
        </div>
        <div className="setlogo">
          <img src={netlify} alt="netlify" height="100px" />
          <Typography color="inherit" variant="h6">
            Netlify
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Skills;
