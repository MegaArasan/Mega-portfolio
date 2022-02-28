import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import email from "../assets/email.png";
import phone from "../assets/phone.png";

function Contact() {
  return (
    <section id="contact" className="contact">
      <Typography
        sx={{
          paddingTop: "20px",
          ml: { xs: "10px", sm: "25px" },
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
      <Typography
        sx={{
          ml: { xs: "10px", sm: "25px" },
          fontSize: { xs: "25px", sm: "35px" },
        }}
        variant="h3"
        color="inherit"
        className="headtitle"
      >
        Get in Touch
      </Typography>
      <div className="contact-info">
        <Link
          href="mailto:megaarasan2000@gmail.com"
          target="_blank"
          rel="noreferrer"
          color="inherit"
          underline="none"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={email} alt="email" className="email" height="70px" />
            <h3 style={{ color: "inherit", textAlign: "center" }}>
              <span className="pseudo-link">megaarasan2000@gmail.com</span>
            </h3>
          </div>
        </Link>
        <Link
          // href="tel:+91 8056826307"
          rel="noreferrer"
          color="inherit"
          underline="none"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={phone} alt="phone" className="phone" height="60px" />
            <h3
              className="secondary"
              style={{ color: "inherit", textAlign: "center" }}
            >
              <span className="pseudo-link">8056826307</span>
            </h3>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Contact;
