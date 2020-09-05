/**
 *
 * @author im6h
 *
 * Create at 30/8/2020.
 * Update at 5/9/2020.
 *
 */
import {HashRouter, Switch, Route} from 'react-router-dom';
import React from "react";
import Home from "./Home/Home";
import Detail from "./Detail/Detail";
import Pokedex from "./Pokedex/Pokedex";

export default function Router() {
  return(
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={"/pokedex"} component={Pokedex} />
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