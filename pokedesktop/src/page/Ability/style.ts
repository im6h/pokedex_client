import styled from "styled-components";
import colorStore from "../../asset/style/color";
import animateStore from "../../asset/style/animation";

export const AbilityBase = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;

// style Ability navbar
export const AbilityNavbar = styled.div`
  margin: 30px 20px 0px;
`;

// style Ability wrapper
export const AbilityWrapper = styled.div`
  display: flex;
  height: 87vh;
  width: 100%;
  flex-direction: column;
`;

// style Ability title
export const AbilityTitle = styled.div`
  width: 100%;

  p {
    margin: 0 0 10px 20px;
    font-size: 30px;
    font-weight: bold;
    text-align: left;
  }
`;

// style Ability list
export const AbilityList = styled.div`
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

// style Ability ball
export const AbilityBall = styled.div`
  position: absolute;
  right: 0;
  top: -8px;
`;

// style Ability loading
export const Loading = styled.div`
  border: 4px solid #e2e3e4;
  border-radius: 50%;
  border-top: 4px solid ${colorStore.typeFire};
  width: 20px;
  height: 20px;
  animation: ${animateStore.spin} 2s linear infinite;
`;

// style Ability modal
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

// style Ability alert
export const AbilityAlert = styled.div`
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

// style Ability card
export const AbilityCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 100%;
  border: 1px solid transparent;
  border-radius: 10px;
  background: ${colorStore.abilities};
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
export const AbilityIcon = styled.div`
  position: absolute;
  left: 0;
  bottom: -5px;
`;
export const AbilityCardNumber = styled.div`
  margin: 2px 10px;
  text-align: right;
  color: ${colorStore.background};
  font-size: 14px;
  p {
    font-size: 14px;
    font-weight: bold;
  }
`;
export const AbilityCardName = styled.div`
  text-align: center;
  margin-left: 20px;
  color: ${colorStore.background};
  word-break: break-all;
  p {
    font-size: 16px;
    font-weight: bold;
  }
`;
