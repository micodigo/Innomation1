import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/ContactUs" exact>
        <Contact />
      </Route>
      <Route path="/AboutUs" exact>
        <Aboutus />
      </Route>
      <Route path="/Services" exact>
        <Services />
      </Route>
    </Switch>
  );
}
