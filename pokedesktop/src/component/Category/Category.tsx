/**
 *
 * @author im6h
 *
 * Create at 2/9/2020.
 * Update at 2/9/2020.
 *
 */
import React from "react";
import "./Category.scss"
import {formatNamePokemon} from "../../util/functionHelper";

function Category({name}: any) {


  return (
      <div className={`category category-${name}`}>
        {/*wrapper category*/}
        <div className="category__wrapper">
          <p className="category__type">{formatNamePokemon(name)}</p>
        </div>
      </div>
  )
}

export default Category;