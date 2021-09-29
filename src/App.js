import React from "react";
import "./sass/main.scss";
import { Home } from "./pages"
import { NavBar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Home />
    </Router>
 
  );
}

export default App;
