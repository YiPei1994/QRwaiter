import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Heading from './Heading';
import Footer from './Footer';

const StyledApplayout = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  width: 100%;
  height: 100vh;
`;
const Header = styled.header`
  grid-area: 1 / 2 / 2 / 7;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Main = styled.main`
  grid-area: 2 / 2 / 7 / 7;
`;

function Applayout() {
  return (
    <StyledApplayout>
      <Header>
        <Heading as="h1">Welcome to self ordering service</Heading>
      </Header>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledApplayout>
  );
}

export default Applayout;
