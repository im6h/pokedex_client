import styled from "styled-components";
import colorStore from "../../asset/style/color";
import animationStore from "../../asset/style/animation";

const Loading = styled.div`
  border: 4px solid #e2e3e4;
  border-radius: 50%;
  border-top: 4px solid ${colorStore.typeFire};
  width: 20px;
  height: 20px;
  animation: ${animationStore.spin} 2s linear infinite;
`;

export default Loading;
