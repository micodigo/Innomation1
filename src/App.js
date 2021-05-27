import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Aboutus from "./pages/Aboutus";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Layout>
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
      </Switch>
    </Layout>
  );
}
