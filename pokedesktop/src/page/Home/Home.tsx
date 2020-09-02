import React from "react";
import SearchBar from "../../component/Search/Search";
import Category from "../../component/Category/Category";
import Chip from "../../component/Chip/Chip";
function Home(){
  return(
      <div>
        <SearchBar />
        <Chip name="fire" />
        <Category name="pokedex" />
      </div>
  )
}
export default Home;