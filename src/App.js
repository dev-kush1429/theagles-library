/* Functionality Testing component */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Temp from "./testComponent/testComponent";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/brand/:shop/:brandName" exact render={(props) => {
          return <Temp {...props} />;
        }} />
        <Route path="/" exact render={(props) => {
          return <Temp {...props} />;
        }} />
      </Switch>
    </Router>
  );
}

export default App;
