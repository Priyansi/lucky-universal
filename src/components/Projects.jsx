import React, { useState } from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Typography from "@material-ui/core/Typography";
import Cards from "./Cards";

export default function Projects() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Featured Projects
          </Typography>
        </Container>

        <div className={classes.root}>
          {images.map((image) => (
            <ButtonBase
              focusRipple
              key={image.title}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: image.width,
              }}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          ))}
        </div>
        <div style={{ paddingTop: "2rem" }}>
          <Tabs
            defaultActiveKey="completed"
            id="uncontrolled-tab-example"
            justify="center"
          >
            <Tab eventKey="completed" title="Completed Projects">
              <Cards />
            </Tab>
            <Tab eventKey="ongoing" title="Ongoing Projects">
              <Cards />
            </Tab>
          </Tabs>
        </div>
      </div>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "Project 1",
    width: "40%",
  },
  {
    url:
      "https://images.unsplash.com/photo-1489402954857-207e3f591c0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: "Project 2",
    width: "30%",
  },
  {
    url:
      "data:image/jpeg;base64,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",
    title: "Project 3",
    width: "30%",
  },
];
