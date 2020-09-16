import styled from "styled-components";
import colorStore from "../../asset/style/color";
import animateStore from "../../asset/style/animation"; // style type base
export const TypeBase = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;
export const TypeNavbar = styled.div`
  margin: 30px 20px 0px;
`;
export const TypeBall = styled.div`
  position: absolute;
  right: 0;
  top: -8px;
`;
export const TypeWrapper = styled.div`
  display: flex;
  height: 87vh;
  width: 100%;
  flex-direction: column;
`;
export const TypeTitle = styled.div`
  width: 100%;

  p {
    margin: 0 0 10px 20px;
    font-size: 30px;
    font-weight: bold;
    text-align: left;
  }
`;
export const TypeList = styled.div`
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
export const TypeCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 100%;
  border: 1px solid transparent;
  border-radius: 10px;
  background: ${colorStore.type};
  margin: 10px 0px;
  position: relative;
  padding: 7px 0px;
  &:hover {
    p {
      animation-name: ${animateStore.zoomX};
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
  }
`;
export const TypeCardNumber = styled.div`
  margin: 2px 10px;
  text-align: right;
  color: ${colorStore.typeIce};
  font-size: 14px;
  p {
    font-size: 14px;
    font-weight: bold;
  }
`;
export const TypeCardName = styled.div`
  text-align: center;
  margin-left: 20px;
  color: ${colorStore.background};
  word-break: break-all;
  p {
    font-size: 16px;
    font-weight: bold;
  }
`;
export const TypeIcon = styled.div`
  position: absolute;
  left: 0;
  bottom: -5px;
`;
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
export const Loading = styled.div`
  border: 4px solid #e2e3e4;
  border-radius: 50%;
  border-top: 4px solid ${colorStore.typeFire};
  width: 20px;
  height: 20px;
  animation: ${animateStore.spin} 2s linear infinite;
`;
