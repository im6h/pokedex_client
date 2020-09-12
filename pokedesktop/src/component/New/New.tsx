/**
 *
 * @author im6h
 *
 * Create at 30/8/2020.
 * Update at 2/9/2020.
 *
 */

import React from "react";
import styled from "styled-components";

function New() {
  return (
    <NewBase>
      {/*title*/}
      <NewTitle className={"new__title"}>
        <div
          style={{
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          Pokémon Rumble Rush Arrives Soon
        </div>
        <div
          style={{
            fontSize: "12px",
          }}
        >
          15 May 2019
        </div>
      </NewTitle>
      {/*img*/}
      <NewImage className={"new__image"}>
        <img
          src="https://res.cloudinary.com/lmn/image/upload/c_limit,h_360,w_640/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/p/o/k/pokemon-sunmoon-starters-a9591.jpg"
          alt=""
        />
      </NewImage>
    </NewBase>
  );
}

const NewBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 5px;
  margin: 5px;
`;
const NewTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const NewImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 66px;
    width: 110px;
  }
`;
export default New;
