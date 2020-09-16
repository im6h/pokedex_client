import styled from "styled-components";
import colorStore from "../../asset/style/color";
import animateStore from "../../asset/style/animation";
// animation

// style move base
export const MoveBase = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;

// style move navbar
export const MoveNavbar = styled.div`
  margin: 30px 20px 0px;
`;

// style move wrapper
export const MoveWrapper = styled.div`
  display: flex;
  height: 87vh;
  width: 100%;
  flex-direction: column;
`;

// style move title
export const MoveTitle = styled.div`
  width: 100%;

  p {
    margin: 0 0 10px 20px;
    font-size: 30px;
    font-weight: bold;
    text-align: left;
  }
`;

// style move list
export const MoveList = styled.div`
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
export const MoveBall = styled.div`
  position: absolute;
  right: 0;
  top: -8px;
`;

// style move loading
export const Loading = styled.div`
  border: 4px solid #e2e3e4;
  border-radius: 50%;
  border-top: 4px solid ${colorStore.typeFire};
  width: 20px;
  height: 20px;
  animation: ${animateStore.spin} 2s linear infinite;
`;

// style move modal
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

// style move alert
export const MoveAlert = styled.div`
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
export const MoveCard = styled.div`
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
      animation-name: ${animateStore.zoomY};
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
  }
`;
export const MoveIcon = styled.div`
  position: absolute;
  left: 0;
  bottom: -5px;
`;
export const MoveCardNumber = styled.div`
  margin: 2px 10px;
  text-align: right;
  color: ${colorStore.background};
  font-size: 14px;
  p {
    font-size: 14px;
    font-weight: bold;
  }
`;
export const MoveCardName = styled.div`
  text-align: center;
  margin-left: 20px;
  color: ${colorStore.background};
  word-break: break-all;
  p {
    font-size: 16px;
    font-weight: bold;
  }
`;
