import React from 'react';
import styled from 'styled-components';

const Home: React.FC = () => {
  return (
    <>
      <div>
        <Content>Hello From Home</Content>
      </div>
    </>
  );
};
const Content = styled.div`
  margin-top: 12px;
  overflow-x: hidden;
  overflow-y: auto;
  height: 88vh;
`;
export default Home;
