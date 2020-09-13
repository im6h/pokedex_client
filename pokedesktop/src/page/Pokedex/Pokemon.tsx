/**
 *
 * @author im6h
 *
 * Create at 13/9/2020.
 * Update at 13/9/2020.
 *
 */
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import colorStore from "../../asset/style/color";
import animateStore from "../../asset/style/animation";
import Navbar from "../../component/Navbar/Navbar";
import Chip from "../../component/Chip/Chip";
import PokemonStore from "../../store/pokemon";
import { observer } from "mobx-react-lite";
import {
  convertNumberIdPokemon,
  formatNamePokemon,
  formatUrlImage,
} from "../../util/functionHelper";

function Pokemon() {
  let { id } = useParams();

  const [tab, setTab] = React.useState("about");
  const pokemonStore = React.useContext(PokemonStore);
  const getColor = (color: string) => {
    switch (color) {
      case "fire":
        return colorStore.typeFire;
        break;

      default:
        break;
    }
  };

  const changeTab = (tab: string) => {
    switch (tab) {
      case "about":
        return <div>about</div>;
        break;
      case "stats":
        return <div>stats</div>;
        break;
      case "evolution":
        return <div>evolution</div>;
        break;
      case "moves":
        return <div>moves</div>;
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    pokemonStore.getPokedex(id);
  }, []);

  return (
    <PokemonBase>
      <PokemonNavbar>
        <Navbar />
      </PokemonNavbar>
      <PokemonBall>
        <svg
          width="163"
          height="192"
          viewBox="0 0 163 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.05"
            d="M249 77.1524H184.391C179.524 105.828 154.562 127.664 124.5 127.664C94.438 127.664 69.4759 105.828 64.6088 77.1524H0C5.20826 141.351 58.9595 191.827 124.5 191.827C190.041 191.827 243.792 141.351 249 77.1524ZM248.882 55.3096H184.143C178.727 27.3086 154.083 6.16327 124.5 6.16327C94.9169 6.16327 70.2725 27.3086 64.8567 55.3096H0.118249C5.97203 -8.238 59.4247 -58 124.5 -58C189.575 -58 243.028 -8.238 248.882 55.3096ZM166.25 66.9136C166.25 89.9717 147.558 108.664 124.5 108.664C101.442 108.664 82.7497 89.9717 82.7497 66.9136C82.7497 43.8555 101.442 25.1633 124.5 25.1633C147.558 25.1633 166.25 43.8555 166.25 66.9136Z"
            fill="#303943"
          />
        </svg>
      </PokemonBall>
      <PokemonWrapper>
        <PokemonInfo>
          <PokemonNameAndNumber>
            <h3>{formatNamePokemon(pokemonStore.pokemon.name)}</h3>
            <p>{"#" + convertNumberIdPokemon(pokemonStore.pokemon.id)}</p>
          </PokemonNameAndNumber>
          <PokemonType>
            {pokemonStore.pokemon.types.map((e: any) => {
              return <Chip key={e.slot} name={e.type.name} />;
            })}
          </PokemonType>
          <PokemonImg>
            <img
              src={`${formatUrlImage(
                parseInt(convertNumberIdPokemon(pokemonStore.pokemon.id)),
              )}`}
              alt=""
            />
          </PokemonImg>
        </PokemonInfo>
        <PokemonFull>
          <PokemonTab>
            <Tab
              onClick={() => {
                setTab("about");
              }}
            >
              About
            </Tab>
            <Tab
              onClick={() => {
                setTab("stats");
              }}
            >
              Base Stats
            </Tab>
            <Tab
              onClick={() => {
                setTab("evolution");
              }}
            >
              Evolution
            </Tab>
            <Tab
              onClick={() => {
                setTab("moves");
              }}
            >
              Moves
            </Tab>
          </PokemonTab>
          {changeTab(tab)}
        </PokemonFull>
      </PokemonWrapper>
    </PokemonBase>
  );
}

const PokemonBase = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;
const PokemonNavbar = styled.div`
  margin: 30px 20px 0px;
`;
const PokemonBall = styled.div`
  position: absolute;
  right: 0;
  top: -10px;
`;
const PokemonWrapper = styled.div`
  margin: 40px 30px 0px;
`;
const PokemonInfo = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;
const PokemonNameAndNumber = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-weight: bold;
    font-size: 36px;
    margin: 5px 0px;
  }
  p {
    font-weight: bold;
    font-size: 18px;
    margin: 0px;
  }
`;
const PokemonType = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  justify-content: space-between;
`;
const PokemonImg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const PokemonFull = styled.div`
  width: 100%;
  height: 50%;
  background: ${colorStore.typeGrass};
  border: 1px solid transparent;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;
const PokemonTab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0px;
`;
const Tab = styled.div`
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
`;
const TabAbout = styled.div``;
const TabStats = styled.div``;
const TabEvolution = styled.div``;
const TabMove = styled.div``;
export default observer(Pokemon);
