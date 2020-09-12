/**
 *
 * @author im6h
 *
 * Create at 3/9/2020.
 * Update at 11/9/2020.
 *
 */

import React from "react";
import styled from "styled-components";
import colorStore from "../../asset/style/color";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();

  return (
    <NavbarBase>
      <NavbarWrapper>
        <NavbarBack
          onClick={() => {
            history.goBack();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="4 0 18 18"
            fill="black"
            width="36px"
            height="36px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </NavbarBack>
        <NavbarList>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            fill="black"
            width="36px"
            height="36px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
          </svg>
        </NavbarList>
      </NavbarWrapper>
    </NavbarBase>
  );
}

const NavbarBase = styled.div`
  width: 100%;
  display: flex;
`;
const NavbarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const NavbarBack = styled.div`
  border: 1px solid transparent;
  background-color: ${colorStore.background};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
`;
const NavbarList = styled.div``;

export default Navbar;
