/**
 * @author im6h
 *
 * Create at 1/9/2020
 * Update at 11/9/2020.
 */

import React from "react";
import styled from "styled-components";
import colorStore from "../../asset/style/color";

function SearchBar() {
  const [value, setValue] = React.useState("");

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // handle event enter press to search.
  const handleValue = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      console.log(value);
    }
  };

  return (
    <SearchBarBase className="searchBar">
      {/*wrapper*/}
      <SearchWarpper className="searchBar__wrapper">
        {/*  icon search */}
        <SearchIcon className="searchBar__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </SearchIcon>
        {/*input search*/}
        <SeacrhBarInput className="searchBar__input">
          <input
            placeholder="Search Pokemon, Move, Ability, etc"
            onChange={changeInput}
            onKeyDown={handleValue}
          />
        </SeacrhBarInput>
      </SearchWarpper>
    </SearchBarBase>
  );
}

const SearchBarBase = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid transparent;
  background-color: ${colorStore.background};
  border-radius: 100px;
  padding: 3px 5px;
  input {
    height: 100%;
    width: 90%;
    padding: 0px 10px;
    background-color: ${colorStore.background};
    outline: none;
    border: none;
    font-size: 14px;
  }
`;
const SearchWarpper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SearchIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
const SeacrhBarInput = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default SearchBar;
