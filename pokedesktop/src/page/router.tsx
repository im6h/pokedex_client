/**
 *
 * @author im6h
 *
 * Create at 30/8/2020.
 * Update at 3/9/2020.
 *
 */
import {HashRouter, Switch, Route} from 'react-router-dom';
import React from "react";
import Home from "./Home/Home";
import Detail from "./Detail/Detail";

export default function Router() {
  return(
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={"/pokedex"} />
          <Route path={"/type"} />
          <Route path={"/ability"} />
          <Route path={"/move"} />
          <Route path={"/generation"} />
          <Route path={"/evolution"} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </HashRouter>
  )
}