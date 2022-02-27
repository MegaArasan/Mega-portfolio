import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import Typography from "@mui/material/Typography";
import football from "../assets/football.png";
import music from "../assets/music.png";
import movies from "../assets/movies.png";
import games from "../assets/games.png";

function Education() {
  return (
    <section id="education" className="eduint">
      <Typography
        sx={{
          ml: { xs: "none", sm: "25px" },
          fontSize: { xs: "25px", sm: "35px" },
        }}
        variant="h4"
        color="inherit"
        className="headtitle"
      >
        EDUCATION
      </Typography>
      <div className="education">
        <VerticalTimeline lineColor="#000000">
          <VerticalTimelineElement
            contentStyle={{ backgroundColor: "#b8b6b6" }}
            contentArrowStyle={{ borderRight: "7px solid  #000000" }}
            className="vertical-timeline-element--work"
            date="2017-2021"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3
              style={{ color: "inherit" }}
              className="vertical-timeline-element-title"
            >
              B.E
            </h3>
            <p style={{ color: "inherit" }}>
              University College of Engineering,Pattukottai.
            </p>
            <p style={{ color: "inherit" }}>Percentage:75.6</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#0000004a", color: "inherit" }}
            contentArrowStyle={{ borderRight: "7px solid  #000000" }}
            date="2016 - 2017"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<HomeWorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">HSC</h3>
            <p>Seyad Matric Hr Sec School,Courtallam.</p>
            <p>Percentage:81.41</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ backgroundColor: "#b8b6b6" }}
            contentArrowStyle={{ borderRight: "7px solid  #000000" }}
            className="vertical-timeline-element--work"
            date="2014-2015"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<HomeWorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">SSLC</h3>
            <p>Seyad Matric Hr Sec School,Courtallam.</p>
            <p>Percentage:93.5</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Typography
        sx={{
          paddingTop: "20px",
          ml: { xs: "none", sm: "25px" },
          fontSize: { xs: "25px", sm: "35px" },
        }}
        variant="h4"
        color="inherit"
        className="headtitle"
      >
        HOBBIES
      </Typography>
      <div className="skillset">
        <div className="setlogo">
          <img src={football} alt="vscode" height="120px" />
          <Typography color="inherit" variant="h6">
            Sports
          </Typography>
        </div>
        <div className="setlogo">
          <img src={music} alt="postman" height="120px" />
          <Typography color="inherit" variant="h6">
            Music
          </Typography>
        </div>
        <div className="setlogo">
          <img src={movies} alt="heroku" height="120px" />
          <Typography color="inherit" variant="h6">
            Bike Riding
          </Typography>
        </div>
        <div className="setlogo">
          <img src={games} alt="games" className="games" height="120px" />
          <Typography color="inherit" variant="h6">
            Gaming
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default Education;
