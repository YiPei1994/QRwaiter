import React from 'react';
import Button from '../../ui/Button';
import OwnerOrderMenu from './OwnerOrderMenu';

function OwnerOrders({ order }) {
  console.log(order);
  const { status, tableId, addedMenus } = order;
  return (
    <>
      <div>
        <span>{tableId}</span>
        <span>{status} </span>
        <Button>Accept</Button>
        <Button>Done</Button>
      </div>
      <div>
        {addedMenus.map((menu) => (
          <OwnerOrderMenu key={menu.id} menu={menu} />
        ))}
      </div>
    </>
  );
}

export default OwnerOrders;
