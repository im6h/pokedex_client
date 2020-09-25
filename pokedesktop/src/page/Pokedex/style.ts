import styled from "styled-components";

import colorStore from "../../asset/style/color";
import animateStore from "../../asset/style/animation";
// style pokedex base
export const PokedexBase = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;

// style pokedex navbar
export const PokedexNavbar = styled.div`
  margin: 30px 20px 0px;
`;

// style pokedex wrapper
export const PokedexWrapper = styled.div`
  display: flex;
  height: 87vh;
  width: 100%;
  flex-direction: column;
`;

// style pokedex title
export const PokedexTitle = styled.div`
  width: 100%;

  p {
    margin: 0 0 10px 20px;
    font-size: 30px;
    font-weight: bold;
    text-align: left;
  }
`;

// style pokedex list
export const PokedexList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 45% 45%;
  grid-gap: 14px 1px;
  justify-content: center;
  align-items: center;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colorStore.typeNormal};
  }
`;

// style pokedex ball
export const PokedexBall = styled.div`
  position: absolute;
  right: 0;
  top: -10px;
`;

// style pokedex loading
export const Loading = styled.div`
  border: 4px solid #e2e3e4;
  border-radius: 50%;
  border-top: 4px solid ${colorStore.typeFire};
  width: 20px;
  height: 20px;
  animation: ${animateStore.spin} 2s linear infinite;
`;

// style pokedex modal
export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

// style pokedex alert
export const PokedexAlert = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;

  p {
    font-size: 30px;
    font-weight: bold;
  }
`;
export const PokemonBase = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
export const PokemonNavbar = styled.div`
  margin: 30px 20px 0px;
`;
export const PokemonBallMon = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 150px;
  svg {
    opacity: 0.4;
    animation: ${animateStore.spin} 8s linear infinite;
  }
`;
export const PokemonBall = styled.div`
  position: absolute;
  right: 0;
  top: -10px;
`;
export const PokemonWrapper = styled.div`
  width: 500px;
`;
export const PokemonInfo = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;
export const PokemonNameAndNumber = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${colorStore.background};
  h3 {
    font-weight: bold;
    font-size: 36px;
    margin: 5px 30px;
  }
  p {
    font-weight: bold;
    font-size: 18px;
    margin: 5px 30px;
  }
`;
export const PokemonType = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  justify-content: space-between;
  margin: 0px 30px;
`;
export const PokemonImg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 215px;
  img {
    opacity: 1;
  }
`;
export const PokemonFull = styled.div`
  width: 500px;
  height: 50%;
  background-color: white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;
export const PokemonTab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0px;
`;
export const Tab = styled.div`
  font-size: 14px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
export const TabStats = styled.div`
  padding: 0px 60px 50px 60px;
`;
// style pokedex alert
