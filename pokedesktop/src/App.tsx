/**
 *
 * @author im6h
 *
 * Create at 5/9/2020.
 * Update at 11/9/2020.
 *
 */
import React from "react";
import Router from "./page/router";
import styled from "styled-components";

function App() {
  return (
    <AppBase>
      <AppContainer>
        <Router />
      </AppContainer>
    </AppBase>
  );
}

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
