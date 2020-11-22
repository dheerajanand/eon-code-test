import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "../src/page/homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
