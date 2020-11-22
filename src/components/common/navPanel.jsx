import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    listStyleType: "none",
    backgroundColor: "lightgrey",
    margin: "0.5rem",
    padding: "0",
    "& li": {
      borderBottom: "1px dotted",
      paddingBottom: 5,
      "& a": {
        color: theme.palette.primary.main,
      },
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function NavPanel() {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      <li>
        <a href="#">platea</a>
      </li>
      <li>
        <a href="#">dictumst</a>
      </li>
      <li>
        <a href="#">quisque</a>
      </li>
      <li>
        <a href="#">agittis</a>
      </li>
      <li>
        <a href="#">purus</a>
      </li>
    </ul>
  );
}
