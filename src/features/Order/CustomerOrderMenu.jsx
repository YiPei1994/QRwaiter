import React from 'react';
import ButtonIcon from '../../ui/ButtonIcon';
import { FiMinus } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
`;
const MenuChild = styled.div`
  flex: 1;
`;
function CustomerOrderMenu({ menu }) {
  const { name, price, quantity, customerNote } = menu;
  const addedPrice = quantity * price;
  return (
    <Menu>
      <MenuChild>{name} </MenuChild>

      <MenuChild>
        <ButtonIcon>
          <FiMinus />
        </ButtonIcon>
        <span>{quantity} </span>
        <ButtonIcon>
          <FiPlus />
        </ButtonIcon>
      </MenuChild>
      <MenuChild> {customerNote} </MenuChild>
      <MenuChild>{addedPrice} </MenuChild>
    </Menu>
  );
}

export default CustomerOrderMenu;
