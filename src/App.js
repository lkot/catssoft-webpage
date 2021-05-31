import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";

import { Translator, Translate } from "react-auto-translate";

// Technically I could use my components like Navbar, etc. over here
// Not in the special file index.js in the 'pages' folder.
function App() {
  return (
    <Router>
      {/* Utilizing React Router and passing actual routes to the Switch.*/}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
