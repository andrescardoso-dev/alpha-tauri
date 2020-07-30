import React from "react";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NavbarAlt from "./components/NavbarAlt";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

export default function App() {
  return (
    <Router>
        <Route component={NavbarAlt}/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
    </Router>
  );
}
