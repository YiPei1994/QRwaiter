import React from 'react';
import { useCustomerContext } from '../../context/CustomerContext';
import Heading from '../../ui/Heading';
import OrderedMenu from './OrderedMenu';
import styled from 'styled-components';
import Button from '../../ui/Button';
import { useCreateOrder } from './useCreateOrder';
import Badge from '../../ui/Bagde';

const StyledOrderList = styled.div`
  width: 120rem;
  height: 60vh;
  display: flex;
  flex-direction: column;
`;
const MenusWrapper = styled.div`
  margin: 2rem auto;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  width: 100%;
`;
function OrderList() {
  const { createOrder, isLoading } = useCreateOrder();
  const { table, addedMenus, menusTotalPrice } = useCustomerContext();
  function handleClick() {
    createOrder({ tableId: table, totalPrice: menusTotalPrice });
  }

  return (
    <StyledOrderList>
      <Heading>Orderlist of table #{table}</Heading>
      <MenusWrapper>
        {addedMenus.map((menu) => (
          <OrderedMenu key={menu.id} menu={menu} />
        ))}
      </MenusWrapper>
      <div>
        <p>{menusTotalPrice}</p>
        <Button
          disabled={isLoading}
          onClick={handleClick}
          variation="success"
          size="large"
        >
          Order
        </Button>
      </div>
    </StyledOrderList>
  );
}

export default OrderList;
