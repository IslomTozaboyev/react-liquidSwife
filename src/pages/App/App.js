import React from "react";
import { Switch, Route } from "react-router-dom";
import Category from "../category";
import Home from "./../../components/liquidswipe";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/courses" component={Category} />
        <Route path="/max" component={Category} />
      </Switch>
    </div>
  );
};

export default App;
