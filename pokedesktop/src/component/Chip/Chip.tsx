/**
 *
 * @author im6h
 *
 * Create at 2/9/2020.
 * Update at 2/9/2020.
 *
 */

import React from "react";
import "./Chip.scss"
import {formatNamePokemon} from "../../util/functionHelper";

function Chip({name}: any) {
  return (
      <div className={`chip chip-${name}`}>
        {/*wrapper category*/}
        <div className="chip__wrapper">
          <p className="chip__type">{formatNamePokemon(name)}</p>
        </div>
      </div>
  )
}

export default Chip;