/**
 *
 * @author im6h
 *
 * Create at 5/9/2020.
 * Update at 4/10/2020.
 *
 */
import React, { useEffect } from "react";
import Router from "./config/router";
import styled from "styled-components";
import { notification } from "antd";

const App: React.FC = () => {
  useEffect(() => {
    notification.open({
      message: "About us",
      description: "Pokedex v0.1.4",
    });
  }, []);
  return (
    <AppBase>
      <AppContainer>
        <Router />
      </AppContainer>
    </AppBase>
  );
};

// style app base
const AppBase = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// style app container
const AppContainer = styled.div`
  width: 500px;
`;
export default App;
