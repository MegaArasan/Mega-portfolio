import React from "react";
import Typography from "@mui/material/Typography";
import formimg from "../assets/formimg.png";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import Card from "@mui/material/Card";

function Contact() {
  return (
    <section id="contact" className="contact">
      <Typography
        sx={{
          ml: { xs: "none", sm: "25px" },
          fontSize: { xs: "25px", sm: "35px" },
        }}
        variant="h4"
        color="inherit"
      >
        CONTACT
      </Typography>
      <div className="contact-info">
        <img src={formimg} alt="Mega Arasan" className="portimg1" />
        <div className="conform">
          <Typography variant="h5">Find me on:</Typography>
          <Card
            className="contactbox"
            sx={{
              backgroundColor: "rgb(0,0,0,0.2)",
              maxWidth: "550px",
              border: "1px solid whitesmoke",
              width: "100%",
              padding: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "25px", sm: "35px" }, color: "inherit" }}
            >
              <EmailIcon sx={{ fontSize: 30 }} />
              <a
                href="mailto:egaarasan2000@email.com"
                underline="none"
                style={{ textDecoration: "none" }}
              >
                megaarasan2000
              </a>
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "25px", sm: "35px" }, color: "inherit" }}
            >
              <GitHubIcon sx={{ fontSize: 30 }} />
              <a
                href="https://github.com/megaarasan"
                rel="noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                MegaArasan
              </a>
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "25px", sm: "35px" } }}
            >
              <PhoneIcon sx={{ fontSize: 30 }} />
              8056826307
            </Typography>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Contact;
