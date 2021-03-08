import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routers/Home";
import List from "./routers/List";

const App = () => {
  return(
    <Router>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/list" component={List}/>
      </Switch>
    </Router>
  )
}

export default App;