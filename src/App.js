import React from "react";
import "./sass/main.scss";
import { Home, Model } from "./pages"
import { NavBar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Route
      render={({location}) => (
        <Switch location={location} key={location.pathname}>
          <Route
          exact
          path="/"
          render={() => <Home />}
          />
          <Route
          exact
          path="/model/:id"
          render={() => <Model />}
          />
        </Switch>
      )}
      />
    </Router>
 
  );
}

export default App;
