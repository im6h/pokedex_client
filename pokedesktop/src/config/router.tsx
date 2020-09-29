/**
 *
 * @author im6h
 *
 * Create at 30/8/2020.
 * Update at 29/9/2020.
 *
 */
import { HashRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "../page/Home/Home";
import Pokedex from "../page/Pokedex/Pokedex";
import Move from "../page/Move/Move";
import Type from "../page/Type/Type";
import Generation from "../page/Generation/Generation";
import Ability from "../page/Ability/Ability";
import Item from "../page/Item/Item";
import Pokemon from "../page/Pokedex/Pokemon";
import MoveDetail from "../page/Move/MoveDetail";
import TypeDetail from "../page/Type/TypeDetail";
import GenerationDetail from "../page/Generation/GenerationDetail";
export default function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={"/pokedex"} component={Pokedex} />
        <Route exact path={"/pokedex/:id"} component={Pokemon} />
        <Route exact path={"/type"} component={Type} />
        <Route exact path={"/type/:id"} component={TypeDetail} />
        <Route exact path={"/ability"} component={Ability} />
        <Route exact path={"/move"} component={Move} />
        <Route exact path={"/move/:id"} component={MoveDetail} />
        <Route exact path={"/generation"} component={Generation} />
        <Route exact path={"/generation/:id"} component={GenerationDetail} />
        <Route exact path={"/item"} component={Item} />
      </Switch>
    </HashRouter>
  );
}
