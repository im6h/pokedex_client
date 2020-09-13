import styled, { keyframes } from "styled-components";

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
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;
const zoomY = keyframes`
 from {
    transform: translateX(0) scale(1);
  }
  to {
    transform: translatex(110px) scale(2);
  }
`;
const animation = {
  spin,
  zoomX,
  zoomY,
};

export default animation;
