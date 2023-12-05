import React from 'react';
import MenuOperations from './MenuOperations';
import Menu from './Menu';
import { useMenus } from './useMenus';
import Spinner from '../../ui/Spinner';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import Footer from '../../ui/Footer';

const StyledMenuTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 80vh;
`;

const MenuTable = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  overflow-y: scroll;
`;

function MenusTable() {
  const { menus, isLoading } = useMenus();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get('menu') || 'all';

  let filteredMenus;

  if (filterValue === 'all') filteredMenus = menus;
  if (filterValue === 'soup')
    filteredMenus = menus.filter((menu) => menu.category === 'Soup');
  if (filterValue === 'starters')
    filteredMenus = menus.filter((menu) => menu.category === 'Starters');
  if (filterValue === 'maindish')
    filteredMenus = menus.filter((menu) => menu.category === 'Main');
  if (filterValue === 'fastfood')
    filteredMenus = menus.filter((menu) => menu.category === 'Fastfood');
  if (filterValue === 'desserts')
    filteredMenus = menus.filter((menu) => menu.category === 'Dessert');
  return (
    <StyledMenuTable>
      <MenuOperations />
      <MenuTable type="horizontal">
        {filteredMenus.map((menu) => (
          <Menu key={menu.id} menu={menu} />
        ))}
      </MenuTable>
      <Footer></Footer>
    </StyledMenuTable>
  );
}

export default MenusTable;
