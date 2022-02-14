import React from "react";
import Typography from "@mui/material/Typography";
import megaport from "../assets/megaport.png";

function Home() {
  return (
    <div id="home" className="homepage">
      <div>
        <Typography sx={{ fontSize: "25px" }} variant="h6" color="inherit">
          Hi there!, I'm
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "32px", sm: "60px" } }}
          variant="h2"
          color="inherit"
        >
          Mega Arasan.V
        </Typography>
        <Typography sx={{ fontSize: "30px", color: "#0049af" }} variant="h6">
          Full Stack Developer
        </Typography>
      </div>
      <img src={megaport} alt="Mega Arasan" className="portimg" />
    </div>
  );
}

export default Home;
