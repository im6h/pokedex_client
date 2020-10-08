/**
 *
 * @author im6h
 *
 * Create at 13/9/2020.
 * Update at 4/10/2020.
 *
 */
import React from "react";
import { useParams } from "react-router-dom";
import { getColor } from "../../asset/style/color";
import Navbar from "../../component/Navbar/Navbar";
import Chip from "../../component/Chip/Chip";
import PokemonStore from "../../store/pokemon";
import { observer } from "mobx-react-lite";
import {
  convertNumberIdPokemon,
  formatNamePokemon,
  formatUrlImage,
} from "../../util/functionHelper";
import About from "./components/About";
import Stats from "./components/Stats";
import Move from "./components/Move";
import Evolution from "./components/Evolution";
import { Tabs } from "antd";
import {
  PokemonBase,
  PokemonNavbar,
  PokemonBallMon,
  PokemonWrapper,
  PokemonInfo,
  PokemonNameAndNumber,
  PokemonType,
  PokemonImg,
  PokemonFull,
  Modal,
  PokedexAlert,
} from "./style";

const Pokemon: React.FC<{}> = () => {
  const { TabPane } = Tabs;
  let { id } = useParams();

  const pokemonStore = React.useContext(PokemonStore);
  const [loading, setLoading] = React.useState<boolean>(true);
  const { pokemon, error, pokemonSpecial } = pokemonStore;
  const colorPokemon = pokemon.types[0].type.name;
  React.useEffect(() => {
    pokemonStore.getPokemon(id).then(() => {
      let timeout = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => {
        clearTimeout(timeout);
      };
    });
    if (id < 1000) {
      pokemonStore.getPokemonSpecial(id);
    }
  }, []);

  const PokemonNest = () => {
    return (
      <PokemonFull>
        <Tabs defaultActiveKey="1" size="large" centered tabBarStyle={{}}>
          <TabPane tab="About" key="1">
            <About
              weight={pokemon.weight}
              height={pokemon.height}
              about={pokemonSpecial.flavor_text_entries}
              legendary={pokemonSpecial.is_legendary ? "Yes" : "No"}
              mythical={pokemonSpecial.is_mythical ? "Yes" : "No"}
              happiness={pokemonSpecial.base_happiness}
              captureRate={pokemonSpecial.capture_rate}
            />
          </TabPane>
          <TabPane tab="Stats" key="2">
            <Stats colorPokemon={colorPokemon} arr={pokemon.stats} />
          </TabPane>
          <TabPane tab="Move" key="3">
            <Move colorPokemon={colorPokemon} moves={pokemon.moves} />
          </TabPane>
          <TabPane tab="Evolution" key="4">
            <Evolution />
          </TabPane>
        </Tabs>
      </PokemonFull>
    );
  };
  return (
    <>
      <PokemonBase
        style={{
          backgroundColor: loading ? "#fff" : getColor(colorPokemon),
        }}>
        <PokemonNavbar>
          <Navbar />
        </PokemonNavbar>
        <PokemonBallMon>
          <svg
            width="240"
            height="240"
            viewBox="-25 -84 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="0.1"
              d="M249 77.1524H184.391C179.524 105.828 154.562 127.664 124.5 127.664C94.438 127.664 69.4759 105.828 64.6088 77.1524H0C5.20826 141.351 58.9595 191.827 124.5 191.827C190.041 191.827 243.792 141.351 249 77.1524ZM248.882 55.3096H184.143C178.727 27.3086 154.083 6.16327 124.5 6.16327C94.9169 6.16327 70.2725 27.3086 64.8567 55.3096H0.118249C5.97203 -8.238 59.4247 -58 124.5 -58C189.575 -58 243.028 -8.238 248.882 55.3096ZM166.25 66.9136C166.25 89.9717 147.558 108.664 124.5 108.664C101.442 108.664 82.7497 89.9717 82.7497 66.9136C82.7497 43.8555 101.442 25.1633 124.5 25.1633C147.558 25.1633 166.25 43.8555 166.25 66.9136Z"
              fill="#303943"
            />
          </svg>
        </PokemonBallMon>
        {!loading && (
          <>
            <PokemonWrapper>
              <PokemonInfo>
                <PokemonNameAndNumber>
                  <h3>{formatNamePokemon(pokemon.name)}</h3>
                  <p>{"#" + convertNumberIdPokemon(pokemon.id)}</p>
                </PokemonNameAndNumber>
                <PokemonType>
                  {pokemon.types.map((e: any, index: number) => {
                    return <Chip key={index} name={e.type.name} />;
                  })}
                </PokemonType>
                <PokemonImg>
                  <img
                    src={`${formatUrlImage(
                      parseInt(convertNumberIdPokemon(pokemon.id)),
                    )}`}
                    alt={pokemon.name}
                    loading="lazy"
                  />
                </PokemonImg>
              </PokemonInfo>
              <PokemonNest />
            </PokemonWrapper>
          </>
        )}
        {error === 1 && (
          <Modal className={"pokedex__modal"}>
            <PokedexAlert className={"pokedex__alert"}>
              <p>Check your network</p>
              <button
                onClick={() => {
                  pokemonStore.error = 0;
                }}>
                Close
              </button>
            </PokedexAlert>
          </Modal>
        )}
      </PokemonBase>
    </>
  );
};
export default observer(Pokemon);
