/**
 *
 * @author im6h
 *
 * Create at 13/9/2020.
 * Update at 13/9/2020.
 *
 */
import React from "react";
import styled from "styled-components";
import Navbar from "../../component/Navbar/Navbar";
import colorStore from "../../asset/style/color";
import animateStore from "../../asset/style/animation";
import Base from "../../interface/base";
import { observer } from "mobx-react-lite";
import ItemStore from "../../store/item";
import {
  convertNumberIdPokemon,
  formatNamePokemon,
  splitNumberIdPokemon,
} from "../../util/functionHelper";
function Item() {
  const [offset, setOffset] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const itemStore = React.useContext(ItemStore);
  React.useEffect(() => {
    setTimeout(() => {
      itemStore.getItems(offset, 20);
      setLoading(false);
    }, 3000);
  }, [offset]);

  const loadMore = () => {
    if (itemStore.error !== 2) {
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
    <ItemBase>
      <ItemNavbar>
        <Navbar />
      </ItemNavbar>
      <ItemBall>
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
      </ItemBall>
      <ItemWrapper>
        <ItemTitle>
          <p>Items</p>
        </ItemTitle>
        <ItemList onScroll={handleScroll}>
          {itemStore.items.map((e: Base) => {
            let id: string = splitNumberIdPokemon(e.url);
            let _idItem: number = parseInt(id);
            return (
              <ItemCard key={e.name}>
                <ItemCardNumber>
                  <h4>{`#${convertNumberIdPokemon(_idItem)}`}</h4>
                </ItemCardNumber>
                <ItemCardName>
                  <p>{formatNamePokemon(e.name)}</p>
                </ItemCardName>
                <ItemIcon>
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
                </ItemIcon>
              </ItemCard>
            );
          })}
        </ItemList>
      </ItemWrapper>
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
      {itemStore.error === 1 && (
        <Modal className={"Item__modal"}>
          <ItemAlert className={"Item__alert"}>
            <p>Check your network</p>
            <button
              onClick={() => {
                itemStore.error = 0;
              }}
            >
              Close
            </button>
          </ItemAlert>
        </Modal>
      )}
    </ItemBase>
  );
}

// animation

// style Item base
const ItemBase = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;

// style Item navbar
const ItemNavbar = styled.div`
  margin: 30px 20px 0px;
`;

// style Item wrapper
const ItemWrapper = styled.div`
  display: flex;
  height: 87vh;
  width: 100%;
  flex-direction: column;
`;

// style Item title
const ItemTitle = styled.div`
  width: 100%;

  p {
    margin: 0 0 10px 20px;
    font-size: 30px;
    font-weight: bold;
    text-align: left;
  }
`;

// style Item list
const ItemList = styled.div`
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

// style Item ball
const ItemBall = styled.div`
  position: absolute;
  right: 0;
  top: -8px;
`;

// style Item loading
const Loading = styled.div`
  border: 4px solid #e2e3e4;
  border-radius: 50%;
  border-top: 4px solid ${colorStore.typeFire};
  width: 20px;
  height: 20px;
  animation: ${animateStore.spin} 2s linear infinite;
`;

// style Item modal
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

// style Item alert
const ItemAlert = styled.div`
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

// style Item card
const ItemCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 100%;
  border: 1px solid transparent;
  border-radius: 10px;
  background: ${colorStore.item};
  margin: 10px 0px;
  position: relative;
  padding: 7px 0px;
  &:hover {
    p {
      animation-name: ${animateStore.zoomY};
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
  }
`;
const ItemIcon = styled.div`
  position: absolute;
  left: 0;
  bottom: -5px;
`;
const ItemCardNumber = styled.div`
  margin: 2px 10px;
  text-align: right;
  color: ${colorStore.typeDark};
  font-size: 14px;
  p {
    font-size: 14px;
    font-weight: bold;
  }
`;
const ItemCardName = styled.div`
  text-align: center;
  margin-left: 20px;
  color: ${colorStore.typeDark};
  word-break: break-all;
  p {
    font-size: 16px;
    font-weight: bold;
  }
`;

export default observer(Item);
