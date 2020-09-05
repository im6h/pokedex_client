/**
 *
 * @author im6h
 *
 * Create at 3/9/2020.
 * Update at 5/9/2020.
 *
 */

import React from "react";
import "./Navbar.scss"
import {Link} from "react-router-dom"

function Navbar() {

  return (
      <div className={"navbar"}>
        <div className={"navbar__wrapper"}>
          <Link to={"/"}>
            <div className={"navbar__back"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="black" width="36px" height="36px">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </div>
          </Link>
          <div className={"navbar__list"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="black" width="36px" height="36px">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
            </svg>
          </div>
        </div>
      </div>
  )
}

export default Navbar;