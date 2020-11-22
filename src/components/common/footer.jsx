import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#19325d",
    color: "#fff",
    padding: theme.spacing(2),
    "&  *": {},
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography component="p" variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Turpis egestas
        pretium aeneanpharetra magna ac placerat vestibulum. Sapien et ligula
        ullamcorper malesuada. Et netus et malesuada fames ac turpis. Sit amet
        luctus venenatis lectus magna fringilla urna. In egestas erat imperdiet
        sed. Nibh tellus molestie nunc non blandit. Et netus et malesuada fames
        ac turpis egestas maecenas. Iaculis nunc sed augue lacus. Sodales ut
        etiam sit amet. Ipsum nunc aliquet bibendum enim. Turpis egestas
        maecenas pharetra convallis posuere morbi. Viverra accumsan innisl nisi
        scelerisque eu. Nisl condimentum id venenatis a condimentum.
      </Typography>
      <Typography component="p" variant="body1" align="center">
        &copy; 2020 All rights reserved.
      </Typography>
    </div>
  );
}
