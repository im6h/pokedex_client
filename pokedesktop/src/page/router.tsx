/**
 *
 * @author im6h
 *
 * Create at 30/8/2020.
 * Update at 26/9/2020.
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
import Pokemon from "./Pokedex/Pokemon";
import MoveDetail from "./Move/MoveDetail";
export default function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={"/pokedex"} component={Pokedex} />
        <Route exact path={"/pokedex/:id"} component={Pokemon} />
        <Route exact path={"/type"} component={Type} />
        <Route exact path={"/ability"} component={Ability} />
        <Route exact path={"/move"} component={Move} />
        <Route exact path={"/move/:id"} component={MoveDetail} />
        <Route exact path={"/generation"} component={Generation} />
        <Route exact path={"/item"} component={Item} />
      </Switch>
    </HashRouter>
  );
}
