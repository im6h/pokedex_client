/**
 *
 * @author im6h
 *
 * Create at 30/8/2020.
 * Update at 2/9/2020.
 *
 */
import React from "react";
import SearchBar from "../../component/Search/Search";
import Category from "../../component/Category/Category";
import Chip from "../../component/Chip/Chip";
import Card from "../../component/Card/Card";

function Home() {
  return (
      <div>
        <SearchBar/>
        <Chip name="fire"/>
        <Category name="pokedex"/>
        <Category name="items"/>
        <Category name="type"/>
        <Category name="location"/>
        <Category name="abilities"/>
        <Category name="moves"/>
        <Card name="Pikachu" url={'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png'}/>
      </div>
  )
}

export default Home;