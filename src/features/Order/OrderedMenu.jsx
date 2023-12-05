import React from 'react';
import styled from 'styled-components';
import Button from '../../ui/Button';
import { useCustomerContext } from '../../context/CustomerContext';

const Menu = styled.div`
  padding: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

function OrderedMenu({ menu }) {
  const { id, name, quantity, price } = menu;
  const totalPrice = quantity * price;
  const { handleAddQuantity, handleMinusQuantity, handleDelete } =
    useCustomerContext();
  return (
    <Menu>
      <span>{name}</span>
      <div>
        <button onClick={() => handleMinusQuantity(id)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleAddQuantity(id)}>+</button>
      </div>

      <span>{totalPrice}kc</span>
      <Button variation="danger" onClick={() => handleDelete(id)}>
        Delete
      </Button>
    </Menu>
  );
}

export default OrderedMenu;
