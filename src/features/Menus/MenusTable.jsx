import React from 'react';
import MenuOperations from './MenuOperations';
import Menu from './Menu';
import { useMenus } from './useMenus';
import Spinner from '../../ui/Spinner';
import { useCustomerContext } from '../../context/CustomerContext';
import FlexContainer from '../../ui/FlexContainer';
import styled from 'styled-components';

const StyledMenuTable = styled.div`
  overflow-y: scroll;
`;

function MenusTable() {
  const { menus, isLoading } = useMenus();
  const { table } = useCustomerContext();
  if (isLoading) return <Spinner />;

  return (
    <StyledMenuTable>
      <MenuOperations />
      <FlexContainer>
        {menus.map((menu) => (
          <Menu key={menu.id} menu={menu} />
        ))}
      </FlexContainer>
    </StyledMenuTable>
  );
}

export default MenusTable;
