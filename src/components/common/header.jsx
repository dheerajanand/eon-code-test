import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    WebkitBoxShadow: "0 1px 6px #000029",
    boxShadow: "0 1px 6px #000029",
    margin: "0 auto",
    zIndex: 1,
    position: "relative",
    background: "#fff",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    "&  *": {
      boxSizing: "border-box",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  paper: {
    padding: 0,
    color: theme.palette.text.secondary,
    borderRadius: "0",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
    "& > *": {
      marginRight: "0.5rem",
      [theme.breakpoints.down("sm")]: {
        margin: "0 0 0.5rem 0",
      },
    },
  },
  rightSidedPanel: {
    textAlign: "right",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  inlineBlockMb: {
    [theme.breakpoints.up("sm")]: {
      display: "inline-block",
      marginRight: "1rem",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <a href="#">
            <img src="./images/logo.jpg" alt="EON CLINICS" />
          </a>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Paper className={`${classes.paper} ${classes.rightSidedPanel}`}>
          <h2 className={classes.inlineBlockMb}>EON Clinics' Code Test</h2>
          <Button variant="contained" color="secondary">
            Talk to an Expert
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}
