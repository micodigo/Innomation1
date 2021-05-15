import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/ContactUs" exact>
          <Contact />
        </Route>
      </Switch>
    </>
  );
}
