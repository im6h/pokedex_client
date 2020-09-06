/**
 *
 * @author im6h
 *
 * Create at 5/9/2020.
 * Update at 6/9/2020.
 *
 */

import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Card from "../../component/Card/Card";
import "./Pokdex.scss"
import Base from "../../interface/base";
import {observer} from "mobx-react-lite";
import PokedexStore from "../../store/pokedex"

function Pokedex() {

  const [offset, setOffset] = React.useState(0);
  const [loading, setLoading] = React.useState(true)

  const pokedexStore = React.useContext(PokedexStore);
  React.useEffect(() => {
    setTimeout(() => {
      pokedexStore.getPokedex(offset, 20);
      setLoading(false);
    }, 3000);

  }, [offset])

  const loadMore = () => {
    setLoading(true)
    setOffset(offset + 20)
  }

  const handleScroll = (event: any) => {
    const target = event.target;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      loadMore();
    }
  }

  return (
      <div className={"pokedex"}>
        <div className={"pokedex__navbar"}>
          <Navbar/>
        </div>
        <div className={"pokeball"}>
          <svg width="163" height="192" viewBox="0 0 163 192" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.05"
                  d="M249 77.1524H184.391C179.524 105.828 154.562 127.664 124.5 127.664C94.438 127.664 69.4759 105.828 64.6088 77.1524H0C5.20826 141.351 58.9595 191.827 124.5 191.827C190.041 191.827 243.792 141.351 249 77.1524ZM248.882 55.3096H184.143C178.727 27.3086 154.083 6.16327 124.5 6.16327C94.9169 6.16327 70.2725 27.3086 64.8567 55.3096H0.118249C5.97203 -8.238 59.4247 -58 124.5 -58C189.575 -58 243.028 -8.238 248.882 55.3096ZM166.25 66.9136C166.25 89.9717 147.558 108.664 124.5 108.664C101.442 108.664 82.7497 89.9717 82.7497 66.9136C82.7497 43.8555 101.442 25.1633 124.5 25.1633C147.558 25.1633 166.25 43.8555 166.25 66.9136Z"
                  fill="#303943"/>
          </svg>

        </div>
        <div className={"pokedex__wrapper"}>
          <div className={"pokedex__title"}>
            <p>Pokedex</p>
          </div>
          <div className={"pokedex__list"} onScroll={handleScroll}>
            {
              pokedexStore.pokedex.map((e: Base) => {
                return (
                    <Card key={e.name} name={e.name} url={e.url}/>
                )
              })
            }
          </div>
        </div>
        {
          loading &&
          <div className={"pokedex__modal"}>
              <div style={{
                width: '100%',
                height: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                  <div className={"pokedex__loading"}/>
              </div>
          </div>
        }
        {
          (pokedexStore.error === 1) && <div className={"pokedex__modal"}>
              <div className={"pokedex__alert"}>
                  <p>Check your network</p>
                  <button onClick={() => {
                    pokedexStore.error = 0;
                  }}>Close
                  </button>
              </div>
          </div>
        }
      </div>
  )
}

export default observer(Pokedex);