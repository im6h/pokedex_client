import styled from "styled-components";
import colorStore from "../../asset/style/color";
import animateStore from "../../asset/style/animation";

// style Item base
export const ItemBase = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;

// style Item navbar
export const ItemNavbar = styled.div`
  margin: 30px 20px 0px;
`;

// style Item wrapper
export const ItemWrapper = styled.div`
  display: flex;
  height: 87vh;
  width: 100%;
  flex-direction: column;
`;

// style Item title
export const ItemTitle = styled.div`
  width: 100%;

  p {
    margin: 0 0 10px 20px;
    font-size: 30px;
    font-weight: bold;
    text-align: left;
  }
`;

// style Item list
export const ItemList = styled.div`
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
export const ItemBall = styled.div`
  position: absolute;
  right: 0;
  top: -8px;
`;

// style Item loading
export const Loading = styled.div`
  border: 4px solid #e2e3e4;
  border-radius: 50%;
  border-top: 4px solid ${colorStore.typeFire};
  width: 20px;
  height: 20px;
  animation: ${animateStore.spin} 2s linear infinite;
`;

// style Item modal
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

// style Item alert
export const ItemAlert = styled.div`
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
export const ItemCard = styled.div`
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
export const ItemIcon = styled.div`
  position: absolute;
  left: 0;
  bottom: -5px;
`;
export const ItemCardNumber = styled.div`
  margin: 2px 10px;
  text-align: right;
  color: ${colorStore.typeDark};
  font-size: 14px;
  p {
    font-size: 14px;
    font-weight: bold;
  }
`;
export const ItemCardName = styled.div`
  text-align: center;
  margin-left: 20px;
  color: ${colorStore.typeDark};
  word-break: break-all;
  p {
    font-size: 16px;
    font-weight: bold;
  }
`;
