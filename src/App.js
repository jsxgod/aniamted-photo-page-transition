import React from "react";
import "./sass/main.scss";
import { Home,  Gallery, Model } from "./pages"
import { NavBar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <NavBar />
      <Route
      render={({location}) => (
        <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route
          exact
          path="/"
          render={() => <Home />}
          />
          <Route
          exact
          path="/gallery"
          render={() => <Gallery />}
          />
          <Route
          exact
          path="/model/:id"
          render={() => <Model />}
          />
        </Switch>
        </AnimatePresence>
      )}
      />
    </Router>
 
  );
}

export default App;
