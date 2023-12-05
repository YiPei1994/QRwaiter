import React from 'react';
import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';

function MenuOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="menu"
        options={[
          { value: 'all', label: 'All' },
          { value: 'soup', label: 'Soup' },
          { value: 'starters', label: 'Starters' },
          { value: 'maindish', label: 'Main-dish' },
          { value: 'fastfood', label: 'Fast food' },
          { value: 'desserts', label: 'Desserts' },
        ]}
      />
    </TableOperations>
  );
}

export default MenuOperations;
