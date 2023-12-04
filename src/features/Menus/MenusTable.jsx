import React from 'react';
import MenuOperations from './MenuOperations';
import Menu from './Menu';
import { useMenus } from './useMenus';
import Spinner from '../../ui/Spinner';
import { useCustomerContext } from '../../context/CustomerContext';
import Heading from '../../ui/Heading';

function MenusTable() {
  const { menus, isLoading } = useMenus();
  const { table } = useCustomerContext();
  if (isLoading) return <Spinner />;

  return (
    <div>
      <Heading as="h3">{table} </Heading>
      <MenuOperations />
      {menus.map((menu) => (
        <Menu key={menu.id} menu={menu} />
      ))}
    </div>
  );
}

export default MenusTable;
