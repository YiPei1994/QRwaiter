import React from 'react';
import Heading from '../ui/Heading';
import MenusTable from '../features/Menus/MenusTable';

function Menus() {
  return (
    <div>
      <Heading as="h3">All menus</Heading>
      <MenusTable />
    </div>
  );
}

export default Menus;
