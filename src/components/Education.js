import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import Typography from "@mui/material/Typography";
import sports from "../assets/sports.png";
import music from "../assets/music.png";
import movies from "../assets/movies.png";

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
      >
        EDUCATION
      </Typography>
      <div className="education">
        <VerticalTimeline lineColor="#0049af">
          <VerticalTimelineElement
            contentStyle={{ backgroundColor: "inherit" }}
            className="vertical-timeline-element--work"
            date="2017-2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2016 - 2017"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<HomeWorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">HSC</h3>
            <p>Seyad Matric Hr Sec School,Courtallam.</p>
            <p>Percentage:81.41</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ backgroundColor: "inherit" }}
            className="vertical-timeline-element--work"
            date="2014-2015"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
          ml: { xs: "none", sm: "25px" },
          fontSize: { xs: "25px", sm: "35px" },
        }}
        variant="h4"
        color="inherit"
      >
        HOBBIES
      </Typography>
      <div className="skillset">
        <div className="setlogo">
          <img src={sports} alt="vscode" />
          <Typography color="inherit" variant="h6">
            Sports
          </Typography>
        </div>
        <div className="setlogo">
          <img src={music} alt="postman" />
          <Typography color="inherit" variant="h6">
            Music
          </Typography>
        </div>
        <div className="setlogo">
          <img src={movies} alt="heroku" />
          <Typography color="inherit" variant="h6">
            Movies
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default Education;
