import React from "react";
import Layout from "../components/common/layout";
import NavPanel from "../components/common/navPanel";
import ContentPanel from "../components/common/contentPanel";
import Footer from "../components/common/footer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "stretch",
    },

    "&  *": {
      boxSizing: "border-box",
    },
  },
  clearfix: {
    overflow: "auto",
  },
  leftPanel: {
    width: "20%",
    float: "left",

    background: "lightgrey",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      float: "none",
    },
  },
  rightPanel: {
    width: "80%",
    float: "left",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      float: "none",
    },
  },
}));

export default function HomePage() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.leftPanel}>
          <NavPanel></NavPanel>
        </div>
        <div className={classes.rightPanel}>
          <ContentPanel></ContentPanel>
          <Footer></Footer>
        </div>
      </div>
    </Layout>
  );
}
