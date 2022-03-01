import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Link,
} from "@mui/material";
import kingcars from "../assets/projectimg/kingcars.png";
import pizzadelivery from "../assets/projectimg/pizzadelivery.png";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";
import bookinvoice from "../assets/projectimg/bookinvoice.png";
import movies from "../assets/projectimg/movies.png";
import Chip from "@mui/material/Chip";

function Projects() {
  return (
    <section id="projects" className="projectinfo">
      <Typography
        sx={{
          ml: { xs: "10px", sm: "25px" },
          fontSize: { xs: "25px", sm: "35px" },
        }}
        variant="h4"
        color="inherit"
        className="headtitle"
      >
        PROJECTS
      </Typography>
      <div className="projects">
        <Card
          sx={{ backgroundColor: "#75707066", maxWidth: 350, margin: "15px" }}
        >
          <CardMedia
            component="img"
            alt="King Cars"
            height="230"
            width="100%"
            image={kingcars}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>King Cars- Rental</b>
            </Typography>
            <Typography variant="p" sx={{ fontSize: "20px" }} color="#000000a8">
              you can rent a car for a trip that you want.
            </Typography>
            <br />
            <Typography variant="h6">
              <b>Demo Credentials:</b>
            </Typography>
            <Typography variant="p" sx={{ fontSize: "20px" }} color="#000000a8">
              Mailid: fullstacktester66@gmail.com
            </Typography>
            <br />
            <Typography variant="p" sx={{ fontSize: "20px" }} color="#000000a8">
              Password: Devops66
            </Typography>
            <br />
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Tooltip title="Kingcars-frontend" placement="top">
              <Link
                color="inherit"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/MegaArasan/CarRental-frontend"
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Tooltip>
            <Tooltip title="Kingcars-backend" placement="top">
              <Link
                color="inherit"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/MegaArasan/CarRental-backend"
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Tooltip>
            <Tooltip title="Hoisted link" placement="top">
              <Link
                color="inherit"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://kingcars-rental.netlify.app/login"
              >
                <PreviewIcon fontSize="large" />
              </Link>
            </Tooltip>
          </CardActions>
          <CardContent>
            <Chip size="large" label="Reactjs" />
            <Chip size="large" label="Nodejs" />
            <Chip size="large" label="Mongo Db" />
            <Chip size="large" label="Javascript" />
            <Chip size="large" label="HTML" />
            <Chip size="large" label="CSS" />
          </CardContent>
        </Card>
        <Card
          sx={{ backgroundColor: "#75707066", maxWidth: 350, margin: "15px" }}
        >
          <CardMedia
            component="img"
            alt="King Cars"
            height="230"
            width="100%"
            image={pizzadelivery}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>Mega's Pizza Delivery</b>
            </Typography>
            <Typography variant="p" sx={{ fontSize: "20px" }} color="#000000a8">
              you can buy any kind of pizza.
            </Typography>
            <br />
            <Typography variant="h6">
              <b>Demo Credentials:</b>
            </Typography>
            <Typography variant="p" sx={{ fontSize: "20px" }} color="#000000a8">
              User Name: Devops
            </Typography>
            <br />
            <Typography variant="p" sx={{ fontSize: "20px" }} color="#000000a8">
              Password: Devops66
            </Typography>
            <br />
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Tooltip title="Mega's pizza-frontend" placement="top">
              <Link
                color="inherit"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/MegaArasan/pizza-delivery-app"
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Tooltip>
            <Tooltip title="Mega's pizza-backend" placement="top">
              <Link
                color="inherit"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/MegaArasan/Node-Backend"
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Tooltip>
            <Tooltip title="Hoisted link" placement="top">
              <Link
                color="inherit"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://mega-pizza-delivery.netlify.app/login"
              >
                <PreviewIcon fontSize="large" />
              </Link>
            </Tooltip>
          </CardActions>
          <CardContent>
            <Chip size="large" label="Reactjs" />
            <Chip size="large" label="Nodejs" />
            <Chip size="large" label="Mongo Db" />
            <Chip size="large" label="Javascript" />
            <Chip size="large" label="HTML" />
            <Chip size="large" label="CSS" />
          </CardContent>
        </Card>
        <Card
          sx={{ backgroundColor: "#75707066", maxWidth: 350, margin: "15px" }}
        >
          <CardMedia
            component="img"
            alt="King Cars"
            height="230"
            width="100%"
            image={bookinvoice}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>Book Invoice</b>
            </Typography>
            <Typography variant="p" sx={{ fontSize: "20px" }} color="#000000a8">
              Create and sent invoices to the customer.
            </Typography>
            <br />
            <Typography variant="h6">
              <b>Demo Credentials:</b>
            </Typography>
            <Typography variant="p" sx={{ fontSize: "20px" }} color="#000000a8">
              Mail Id: fullstacktester66@gmail.com
            </Typography>
            <br />
            <Typography variant="p" sx={{ fontSize: "20px" }} color="#000000a8">
              Password: Tester@66
            </Typography>
            <br />
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Tooltip title="BookInvoice-frontend" placement="top">
              <Link
                color="inherit"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/MegaArasan/bookkeeping-frontend"
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Tooltip>
            <Tooltip title="BookInvoice-backend" placement="top">
              <Link
                color="inherit"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/MegaArasan/bookkeeping-backend"
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Tooltip>
            <Tooltip title="Hoisted link" placement="top">
              <Link
                color="inherit"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://book-invoice.netlify.app/login"
              >
                <PreviewIcon fontSize="large" />
              </Link>
            </Tooltip>
          </CardActions>
          <CardContent>
            <Chip size="large" label="Reactjs" />
            <Chip size="large" label="Nodejs" />
            <Chip size="large" label="Mongo Db" />
            <Chip size="large" label="Javascript" />
            <Chip size="large" label="HTML" />
            <Chip size="large" label="CSS" />
          </CardContent>
        </Card>
        <Card
          sx={{ backgroundColor: "#75707066", maxWidth: 350, margin: "15px" }}
        >
          <CardMedia
            component="img"
            alt="King Cars"
            height="230"
            width="100%"
            image={movies}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>Movies DB</b>
            </Typography>
            <Typography variant="p" sx={{ fontSize: "20px" }} color="#000000a8">
              Movies Db with basic CRUD
            </Typography>
            <br />
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Tooltip title="Movies app-frontend" placement="top">
              <Link
                color="inherit"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/MegaArasan/Movies-CRUD"
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Tooltip>
            <Tooltip title="Movies app-backend" placement="top">
              <Link
                color="inherit"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/MegaArasan/Node-demo"
              >
                <GitHubIcon fontSize="large" />
              </Link>
            </Tooltip>
            <Tooltip title="Hoisted link" placement="top">
              <Link
                color="inherit"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://mov-ies-db-app.netlify.app/"
              >
                <PreviewIcon fontSize="large" />
              </Link>
            </Tooltip>
          </CardActions>
          <CardContent>
            <Chip size="large" label="Reactjs" />
            <Chip size="large" label="Nodejs" />
            <Chip size="large" label="Mongo Db" />
            <Chip size="large" label="Javascript" />
            <Chip size="large" label="HTML" />
            <Chip size="large" label="CSS" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Projects;
