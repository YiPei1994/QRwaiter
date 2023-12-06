import React from 'react';

function OwnerOrderMenu({ menu }) {
  const { name, quantity, customerNote } = menu;
  return (
    <div>
      <span>{name} </span>
      <span>{quantity} </span>
      <span>{customerNote} </span>
    </div>
  );
}

export default OwnerOrderMenu;
