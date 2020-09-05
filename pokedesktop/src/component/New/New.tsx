/**
 *
 * @author im6h
 *
 * Create at 30/8/2020.
 * Update at 2/9/2020.
 *
 */

import React from "react";
import "./New.scss"

function New() {
  return (
      <div className={"new"}>
        {/*title*/}
        <div className={"new__title"}>
          <div style={{
            fontSize: '15px',
            fontWeight: 'bold'
          }}>
            Pokémon Rumble Rush Arrives Soon
          </div>
          <div style={{
            fontSize: '12px',
          }}>
            15 May 2019
          </div>
        </div>
        {/*img*/}
        <div className={"new__image"}>
          <img
              src="https://res.cloudinary.com/lmn/image/upload/c_limit,h_360,w_640/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/p/o/k/pokemon-sunmoon-starters-a9591.jpg"
              alt=""/>
        </div>

      </div>
  )
}

export default New;