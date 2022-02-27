import React from "react";
import Typography from "@mui/material/Typography";
import off from "../assets/off.png";
import { useEffect, useRef } from "react";
import { init } from "ityped";

function Home() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 200,
      strings: ["Full Stack Developer.", "MERN Stack Dev..."],
    });
  }, []);
  return (
    <div id="home" className="homepage">
      <div>
        <Typography sx={{ fontSize: "25px" }} variant="h6" color="inherit">
          Hi there!, I'm
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "32px", sm: "60px" },
            fontFamily: "Merienda, cursive",
          }}
          variant="h2"
          color="inherit"
        >
          Mega Arasan.V
        </Typography>
        <Typography sx={{ fontSize: "28px" }} variant="h6">
          I'm a <span ref={textRef} className="animTxt"></span>
        </Typography>
      </div>
      <img src={off} alt="Mega Arasan" className="portimg" />
    </div>
  );
}

export default Home;
