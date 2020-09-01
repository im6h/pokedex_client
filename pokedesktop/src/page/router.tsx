import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from "react";
import Home from "./Home/Home";
import Detail from "./Detail/Detail";

export default function Router() {
  return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:name" component={Detail} />
        </Switch>
      </BrowserRouter>
  )
}