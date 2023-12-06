import React from 'react';
import styled from 'styled-components';
import Button from '../../ui/Button';
import { useCustomerContext } from '../../context/CustomerContext';
import Textarea from '../../ui/Textarea';

const Menu = styled.div`
  padding: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

function OrderedMenu({ menu }) {
  const { id, name, quantity, price } = menu;
  console.log(menu);
  const totalPrice = quantity * price;
  const {
    handleAddQuantity,
    handleMinusQuantity,
    handleDelete,
    setAddedMenus,
    addedMenus,
  } = useCustomerContext();

  function handleNote(val) {
    if (!val) return;
    const updatedMenus = addedMenus.map((menu) =>
      menu.id === id
        ? {
            ...menu,
            customerNote: val,
          }
        : menu,
    );

    setAddedMenus(updatedMenus);
  }

  return (
    <Menu>
      <span>{name}</span>
      <div>
        <button onClick={() => handleMinusQuantity(id)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleAddQuantity(id)}>+</button>
      </div>

      <span>{totalPrice}kc</span>
      <Textarea
        placeholder="Write anything you want to add or remove..."
        onChange={(e) => handleNote(e.target.value)}
      />
      <Button variation="danger" onClick={() => handleDelete(id)}>
        Delete
      </Button>
    </Menu>
  );
}

export default OrderedMenu;
