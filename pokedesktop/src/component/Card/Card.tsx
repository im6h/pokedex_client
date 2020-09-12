/**
 *
 * @author im6h
 *
 * Create at 2/9/2020.
 * Update at 11/9/2020.
 *
 */
import React from "react";
import styled, { keyframes } from "styled-components";
import colorStore from "../../asset/style/color";
import Base from "../../interface/base";
import {
  convertNumberIdPokemon,
  formatNamePokemon,
  formatUrlImage,
  splitNumberIdPokemon,
} from "../../util/functionHelper";

function Card({ name, url }: Base) {
  // function handle event click card
  const handleClick = (): void => {
    console.log(1);
  };

  let id: string = splitNumberIdPokemon(url);
  let _idPokemon: number = parseInt(id);

  return (
    <CardBase
      onClick={() => {
        handleClick();
      }}
    >
      <CardWrapper>
        <CardInfo>
          <CardNumber>
            <p>{`#${convertNumberIdPokemon(_idPokemon)}`}</p>
          </CardNumber>
          <CardName>
            <p>{formatNamePokemon(name)}</p>
          </CardName>
        </CardInfo>
        <CardImage>
          <div className={"card__img"}>
            <img src={formatUrlImage(_idPokemon)} alt={name} />
          </div>
        </CardImage>
        <CardIcon>
          <svg
            width="100"
            height="100"
            viewBox="-30 -70 250 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M249 77.1524H184.391C179.524 105.828 154.562 127.664 124.5 127.664C94.438 127.664 69.4759 105.828 64.6088 77.1524H0C5.20826 141.351 58.9595 191.827 124.5 191.827C190.041 191.827 243.792 141.351 249 77.1524ZM248.882 55.3096H184.143C178.727 27.3086 154.083 6.16327 124.5 6.16327C94.9169 6.16327 70.2725 27.3086 64.8567 55.3096H0.118249C5.97203 -8.238 59.4247 -58 124.5 -58C189.575 -58 243.028 -8.238 248.882 55.3096ZM166.25 66.9136C166.25 89.9717 147.558 108.664 124.5 108.664C101.442 108.664 82.7497 89.9717 82.7497 66.9136C82.7497 43.8555 101.442 25.1633 124.5 25.1633C147.558 25.1633 166.25 43.8555 166.25 66.9136Z"
              fill="#303943"
            />
          </svg>
        </CardIcon>
      </CardWrapper>
    </CardBase>
  );
}

const zoomX = keyframes`
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.3);
    }

`;

const CardBase = styled.div`
  height: 110px;
  width: 200px;
  cursor: pointer;
  border: 1px solid transparent;
  background: ${colorStore.background};
  border-radius: 20px;
  p {
    margin: 0px;
    font-weight: bold;
  }
  &:hover {
    img {
      animation-name: ${zoomX};
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid transparent;
  background: ${colorStore.background};
  border-radius: 20px;
  position: relative;
`;

const CardInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;

  img {
    height: 100px;
    width: 100px;
  }
`;
const CardNumber = styled.div`
  margin-right: 10px;
  margin-top: 2px;
  text-align: right;
  color: #303943;
  font-size: 14px;
`;

const CardIcon = styled.div`
  position: absolute;
  right: 0;
  bottom: -5px;
`;

const CardName = styled.div`
  text-align: center;
  color: ${colorStore.typeSteel};
  font-size: 16px;
  word-break: break-all;
`;
export default Card;
