/**
 *
 * @author im6h
 *
 * Create at 5/9/2020.
 * Update at 11/9/2020.
 *
 */
import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../../component/Navbar/Navbar";
import colorStore from "../../asset/style/color";
import Base from "../../interface/base";
import { observer } from "mobx-react-lite";
import MoveStore from "../../store/move";
import {
  convertNumberIdPokemon,
  formatNamePokemon,
  splitNumberIdPokemon,
} from "../../util/functionHelper";
function Move() {
  const [offset, setOffset] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const moveStore = React.useContext(MoveStore);
  React.useEffect(() => {
    setTimeout(() => {
      moveStore.getMoves(offset, 20);
      setLoading(false);
    }, 3000);
  }, [offset]);

  const loadMore = () => {
    if (moveStore.error != 2) {
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
    <MoveBase>
      <MoveNavbar>
        <Navbar />
      </MoveNavbar>
      <MoveBall>
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
      </MoveBall>
      <MoveWrapper>
        <MoveTitle>
          <p>Moves</p>
        </MoveTitle>
        <MoveList onScroll={handleScroll}>
          {moveStore.moves.map((e: Base) => {
            let id: string = splitNumberIdPokemon(e.url);
            let _idMove: number = parseInt(id);
            return (
              <MoveCard key={e.name}>
                <MoveCardNumber>
                  <h4>{`#${convertNumberIdPokemon(_idMove)}`}</h4>
                </MoveCardNumber>
                <MoveCardName>
                  <p>{formatNamePokemon(e.name)}</p>
                </MoveCardName>
                <MoveIcon>
                  <svg
                    width="75"
                    height="75"
                    viewBox="30 -52 250 250"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.1"
                      d="M249 77.1524H184.391C179.524 105.828 154.562 127.664 124.5 127.664C94.438 127.664 69.4759 105.828 64.6088 77.1524H0C5.20826 141.351 58.9595 191.827 124.5 191.827C190.041 191.827 243.792 141.351 249 77.1524ZM248.882 55.3096H184.143C178.727 27.3086 154.083 6.16327 124.5 6.16327C94.9169 6.16327 70.2725 27.3086 64.8567 55.3096H0.118249C5.97203 -8.238 59.4247 -58 124.5 -58C189.575 -58 243.028 -8.238 248.882 55.3096ZM166.25 66.9136C166.25 89.9717 147.558 108.664 124.5 108.664C101.442 108.664 82.7497 89.9717 82.7497 66.9136C82.7497 43.8555 101.442 25.1633 124.5 25.1633C147.558 25.1633 166.25 43.8555 166.25 66.9136Z"
                      fill="#303943"
                    />
                  </svg>
                </MoveIcon>
              </MoveCard>
            );
          })}
        </MoveList>
      </MoveWrapper>
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
      {moveStore.error === 1 && (
        <Modal className={"move__modal"}>
          <MoveAlert className={"move__alert"}>
            <p>Check your network</p>
            <button
              onClick={() => {
                moveStore.error = 0;
              }}
            >
              Close
            </button>
          </MoveAlert>
        </Modal>
      )}
    </MoveBase>
  );
}

// animation
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const zoomX = keyframes`
 from {
    transform: translateX(0) scale(1);
  }
  to {
    transform: translatex(110px) scale(2);
  }
`;

// style move base
const MoveBase = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;

// style move navbar
const MoveNavbar = styled.div`
  margin: 30px 20px 0px;
`;

// style move wrapper
const MoveWrapper = styled.div`
  display: flex;
  height: 87vh;
  width: 100%;
  flex-direction: column;
`;

// style move title
const MoveTitle = styled.div`
  width: 100%;

  p {
    margin: 0 0 10px 20px;
    font-size: 30px;
    font-weight: bold;
    text-align: left;
  }
`;

// style move list
const MoveList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colorStore.typeNormal};
  }
`;

// style move ball
const MoveBall = styled.div`
  position: absolute;
  right: 0;
  top: -8px;
`;

// style move loading
const Loading = styled.div`
  border: 4px solid #e2e3e4;
  border-radius: 50%;
  border-top: 4px solid ${colorStore.typeFire};
  width: 20px;
  height: 20px;
  animation: ${spin} 2s linear infinite;
`;

// style move modal
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

// style move alert
const MoveAlert = styled.div`
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

// style move card
const MoveCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 100%;
  border: 1px solid transparent;
  border-radius: 10px;
  background: ${colorStore.moves};
  margin: 10px 0px;
  position: relative;
  padding: 7px 0px;
  &:hover {
    p {
      animation-name: ${zoomX};
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
  }
`;
const MoveIcon = styled.div`
  position: absolute;
  left: 0;
  bottom: -5px;
`;
const MoveCardNumber = styled.div`
  margin: 2px 10px;
  text-align: right;
  color: ${colorStore.typeDark};
  font-size: 14px;
  p {
    font-size: 14px;
    font-weight: bold;
  }
`;
const MoveCardName = styled.div`
  text-align: center;
  margin-left: 20px;
  color: ${colorStore.background};
  word-break: break-all;
  p {
    font-size: 16px;
    font-weight: bold;
  }
`;

export default observer(Move);
