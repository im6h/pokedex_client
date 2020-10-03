import styled from "styled-components";
import colorStore from "../../asset/style/color";
import animationStore from "../../asset/style/animation";
export const GenerationBase = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
`;
export const GenerationNavbar = styled.div`
  margin: 30px 20px 0px;
`;
export const GenerationBall = styled.div`
  position: absolute;
  right: 0;
  top: -8px;
`;
export const GenerationWrapper = styled.div`
  display: flex;
  height: 65vh;
  width: 100%;
  flex-direction: column;
`;
export const GenerationTitle = styled.div`
  width: 100%;

  p {
    margin: 0 0 10px 20px;
    font-size: 30px;
    font-weight: bold;
    text-align: left;
  }
`;
export const GenerationList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 45% 45%;
  grid-gap: 1px 1px;
  justify-content: center;
  align-items: center;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colorStore.typeNormal};
  }
`;
export const GenerationCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  border: 1px solid ${colorStore.typeDark};
  border-radius: 10px;
  margin: 10px 0px;
  position: relative;
  padding: 2px 0px;
  img {
    width: 100px;
  }
  &:hover {
    cursor: pointer;
    animation-name: ${animationStore.zoomX};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
`;
export const GenerationCardNumber = styled.div`
  margin: 2px 10px;
  text-align: right;
  color: ${colorStore.typeFire};
  font-size: 14px;
  p {
    font-size: 14px;
    font-weight: bold;
  }
`;
export const GenerationCardName = styled.div`
  text-align: center;
  margin-left: 20px;
  color: ${colorStore.background};
  word-break: break-all;
  p {
    font-size: 16px;
    font-weight: bold;
  }
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
  animation: ${animationStore.spin} 2s linear infinite;
`;
