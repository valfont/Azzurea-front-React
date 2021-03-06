import React from "react";
import "./App.css";
import Accueil from "./pages/Accueil";
import Dashboard from "./pages/Dashboard";
import DashboardConnexion from "./pages/DashboardConnexion";
import Login from "./pages/Login";
import Reservation from "./pages/Reservation";
import Reservation2 from "./pages/Reservation2";
import Reservation3 from "./pages/Reservation3";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route
          exact
          path="/DashboardConnexion"
          component={DashboardConnexion}
        />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Reservation" component={Reservation} />
        <Route exact path="/Reservation2" component={Reservation2} />
        <Route exact path="/Reservation3" component={Reservation3} />
      </Switch>
    </Router>
  );
}

export default App;
