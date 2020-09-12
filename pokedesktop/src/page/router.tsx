/**
 *
 * @author im6h
 *
 * Create at 30/8/2020.
 * Update at 11/9/2020.
 *
 */
import { HashRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./Home/Home";
import Detail from "./Detail/Detail";
import Pokedex from "./Pokedex/Pokedex";
import Move from "./Move/Move";
import Type from "./Type/Type";
import Generation from "./Generation/Generation";

export default function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={"/pokedex"} component={Pokedex} />
        <Route path={"/type"} component={Type} />
        <Route path={"/ability"} />
        <Route path={"/move"} component={Move} />
        <Route path={"/generation"} component={Generation} />
        <Route path={"/evolution"} />
      </Switch>
    </HashRouter>
  );
}
