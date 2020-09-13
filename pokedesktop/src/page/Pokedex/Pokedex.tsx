/**
 *
 * @author im6h
 *
 * Create at 5/9/2020.
 * Update at 13/9/2020.
 *
 */

import React from "react";
import styled from "styled-components";
import colorStore from "../../asset/style/color";
import animateStore from "../../asset/style/animation";
import Navbar from "../../component/Navbar/Navbar";
import Card from "../../component/Card/Card";
import Base from "../../interface/base";
import { observer } from "mobx-react-lite";
import PokedexStore from "../../store/pokedex";

function Pokedex() {
  const [offset, setOffset] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const pokedexStore = React.useContext(PokedexStore);
  React.useEffect(() => {
    setTimeout(() => {
      pokedexStore.getPokedex(offset, 20);
      setLoading(false);
    }, 3000);
  }, [offset]);

  const loadMore = () => {
    if (pokedexStore.error !== 2) {
      setLoading(true);
      setOffset(offset + 20);
    }
  };

  const handleScroll = (event: any) => {
    const target = event.target;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      loadMore();
    }
  };

  return (
    <PokedexBase>
      <PokedexNavbar>
        <Navbar />
      </PokedexNavbar>
      <PokedexBall>
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
      </PokedexBall>
      <PokedexWrapper>
        <PokedexTitle>
          <p>Pokedex</p>
        </PokedexTitle>
        <PokedexList onScroll={handleScroll}>
          {pokedexStore.pokedex.map((e: Base) => {
            return <Card key={e.name} name={e.name} url={e.url} />;
          })}
        </PokedexList>
      </PokedexWrapper>
      {loading && (
        <Modal>
          <div
            style={{
              width: "100%",
              height: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Loading />
            <p
              style={{
                margin: "10px 0px",
                fontSize: "14px",
                fontWeight: "bold",
                color: "#e2e3e4",
              }}
            >
              Loading
            </p>
          </div>
        </Modal>
      )}
      {pokedexStore.error === 1 && (
        <Modal className={"pokedex__modal"}>
          <PokedexAlert className={"pokedex__alert"}>
            <p>Check your network</p>
            <button
              onClick={() => {
                pokedexStore.error = 0;
              }}
            >
              Close
            </button>
          </PokedexAlert>
        </Modal>
      )}
    </PokedexBase>
  );
}

// style pokedex base
const PokedexBase = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;

// style pokedex navbar
const PokedexNavbar = styled.div`
  margin: 30px 20px 0px;
`;

// style pokedex wrapper
const PokedexWrapper = styled.div`
  display: flex;
  height: 87vh;
  width: 100%;
  flex-direction: column;
`;

// style pokedex title
const PokedexTitle = styled.div`
  width: 100%;

  p {
    margin: 0 0 10px 20px;
    font-size: 30px;
    font-weight: bold;
    text-align: left;
  }
`;

// style pokedex list
const PokedexList = styled.div`
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
const PokedexBall = styled.div`
  position: absolute;
  right: 0;
  top: -8px;
`;

// style pokedex loading
const Loading = styled.div`
  border: 4px solid #e2e3e4;
  border-radius: 50%;
  border-top: 4px solid ${colorStore.typeFire};
  width: 20px;
  height: 20px;
  animation: ${animateStore.spin} 2s linear infinite;
`;

// style pokedex modal
const Modal = styled.div`
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
const PokedexAlert = styled.div`
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

export default observer(Pokedex);
