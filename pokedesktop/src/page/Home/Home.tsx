import React from "react";
import SearchBar from "../../component/Search/Search";
import Category from "../../component/Category/Category";
function Home(){
  return(
      <div>
        <SearchBar />
        <Category name="fire" />
      </div>
  )
}
export default Home;