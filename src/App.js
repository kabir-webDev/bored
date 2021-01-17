import React from "react";
import "./App.css";
import Home from "./components/ReactRouter/Home";
import PageB from "./components/ReactRouter/PageB";
import PageA from "./components/ReactRouter/PageA";
import NotFound from "./components/ReactRouter/NotFound";
import { Route, Switch } from "react-router-dom";
import Drawer from "./components/ReactRouter/Drawer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer />
      <Switch>
        <Route exact from="/" render={(props) => <Home {...props} />} />
        <Route exact path="/pageB" render={(props) => <PageB {...props} />} />
        <Route exact path="/pageA" render={(props) => <PageA {...props} />} />
        <Route from="*" render={(props) => <NotFound {...props} />} />
      </Switch>
    </div>
  );
}
