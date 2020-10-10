/**
 *
 * @author im6h
 *
 * Create at 2/9/2020.
 * Update at 9/10/2020.
 *
 */
import React from "react";
import { Spin } from "antd";
import styled from "styled-components";
const Loading: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Spin size="large" />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Loading;
