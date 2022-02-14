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

function Projects() {
  return (
    <section id="projects" className="projectinfo">
      <Typography
        sx={{
          ml: { xs: "none", sm: "25px" },
          fontSize: { xs: "25px", sm: "35px" },
        }}
        variant="h4"
        color="inherit"
      >
        PROJECTS
      </Typography>
      <div className="projects">
        <Card sx={{ maxWidth: 350, margin: "15px" }}>
          <CardMedia
            component="img"
            alt="King Cars"
            height="230"
            width="100%"
            image={kingcars}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              King Cars- Rental
            </Typography>
            <Typography variant="body2" color="text.secondary">
              you can rent a car for a trip that you want.
            </Typography>
            <Typography variant="h6">Demo Credentials:</Typography>
            <Typography variant="body2" color="text.secondary">
              Mailid: fullstacktester66@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Password: Devops66
            </Typography>
          </CardContent>
          <CardActions>
            <Tooltip title="Kingcars-frontend" placement="top">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/MegaArasan/CarRental-frontend"
              >
                <GitHubIcon />
              </Link>
            </Tooltip>
            <Tooltip title="Kingcars-backend" placement="top">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/MegaArasan/CarRental-backend"
              >
                <GitHubIcon />
              </Link>
            </Tooltip>
            <Tooltip title="Hoisted link" placement="top">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://kingcars-rental.netlify.app/login"
              >
                <PreviewIcon />
              </Link>
            </Tooltip>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 350, margin: "15px" }}>
          <CardMedia
            component="img"
            alt="King Cars"
            height="230"
            width="100%"
            image={pizzadelivery}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mega's Pizza Delivery
            </Typography>
            <Typography variant="body2" color="text.secondary">
              you can buy any kind of pizza.
            </Typography>
            <Typography variant="h6">Demo Credentials:</Typography>
            <Typography variant="body2" color="text.secondary">
              User Name: Devops
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Password: Devops66
            </Typography>
          </CardContent>
          <CardActions>
            <Tooltip title="Mega's pizza-frontend" placement="top">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/MegaArasan/pizza-delivery-app"
              >
                <GitHubIcon />
              </Link>
            </Tooltip>
            <Tooltip title="Mega's pizza-backend" placement="top">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/MegaArasan/Node-Backend"
              >
                <GitHubIcon />
              </Link>
            </Tooltip>
            <Tooltip title="Hoisted link" placement="top">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://mega-pizza-delivery.netlify.app/login"
              >
                <PreviewIcon />
              </Link>
            </Tooltip>
          </CardActions>
        </Card>
      </div>
      <div className="projects">
        <Card sx={{ maxWidth: 350, margin: "15px" }}>
          <CardMedia
            component="img"
            alt="King Cars"
            height="230"
            width="100%"
            image={bookinvoice}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Book Invoice
            </Typography>
            <Typography variant="body2" color="text.secondary">
              you can store your customer data and create invoices and sent to
              them.
            </Typography>
            <Typography variant="h6">Demo Credentials:</Typography>
            <Typography variant="body2" color="text.secondary">
              Mail Id: fullstacktester66@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Password: Tester@66
            </Typography>
          </CardContent>
          <CardActions>
            <Tooltip title="BookInvoice-frontend" placement="top">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/MegaArasan/bookkeeping-frontend"
              >
                <GitHubIcon />
              </Link>
            </Tooltip>
            <Tooltip title="BookInvoice-backend" placement="top">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/MegaArasan/bookkeeping-backend"
              >
                <GitHubIcon />
              </Link>
            </Tooltip>
            <Tooltip title="Hoisted link" placement="top">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://book-invoice.netlify.app/login"
              >
                <PreviewIcon />
              </Link>
            </Tooltip>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 350, margin: "15px" }}>
          <CardMedia
            component="img"
            alt="King Cars"
            height="230"
            width="100%"
            image={movies}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Movies DB
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Movies Db with basic CRUD
            </Typography>
          </CardContent>
          <CardActions>
            <Tooltip title="Movies app-frontend" placement="top">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/MegaArasan/Movies-CRUD"
              >
                <GitHubIcon />
              </Link>
            </Tooltip>
            <Tooltip title="Movies app-backend" placement="top">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://github.com/MegaArasan/Node-demo"
              >
                <GitHubIcon />
              </Link>
            </Tooltip>
            <Tooltip title="Hoisted link" placement="top">
              <Link
                color="#0049af"
                target="_blank"
                underline="none"
                rel="noreferrer"
                href="https://movies-reviews-app.netlify.app"
              >
                <PreviewIcon />
              </Link>
            </Tooltip>
          </CardActions>
        </Card>
      </div>
    </section>
  );
}

export default Projects;
