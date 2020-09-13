/**
 *
 * @author im6h
 *
 * Create at 30/8/2020.
 * Update at 13/9/2020.
 *
 */
import { HashRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./Home/Home";
import Pokedex from "./Pokedex/Pokedex";
import Move from "./Move/Move";
import Type from "./Type/Type";
import Generation from "./Generation/Generation";
import Ability from "./Ability/Ability";
import Item from "./Item/Item";

export default function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={"/pokedex"} component={Pokedex} />
        <Route path={"/type"} component={Type} />
        <Route path={"/ability"} component={Ability} />
        <Route path={"/move"} component={Move} />
        <Route path={"/generation"} component={Generation} />
        <Route path={"/item"} component={Item} />
      </Switch>
    </HashRouter>
  );
}
