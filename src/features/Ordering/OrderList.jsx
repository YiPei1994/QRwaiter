import React from 'react';
import { useCustomerContext } from '../../context/CustomerContext';
import Heading from '../../ui/Heading';
import OrderedMenu from './OrderedMenu';
import styled from 'styled-components';
import Button from '../../ui/Button';
import { useCreateOrder } from './useCreateOrder';
import Modal from '../../ui/Modal';
import ConfirmButton from '../../ui/ConfirmButton';
import Textarea from '../../ui/Textarea';

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
  const { table, addedMenus, menusTotalPrice, setAddedMenus } =
    useCustomerContext();

  function handleClick() {
    createOrder(
      {
        tableId: table,
        totalPrice: menusTotalPrice,
        addedMenus: addedMenus,
      },
      { onSuccess: () => setAddedMenus('') },
    );
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
        <Modal>
          <p>{menusTotalPrice}</p>
          <Modal.Open opens="confirmOrder">
            <Button disabled={isLoading} variation="success" size="large">
              Order
            </Button>
          </Modal.Open>
          <Modal.Window name="confirmOrder">
            <ConfirmButton
              resourceName="order"
              onConfirm={handleClick}
              disabled={isLoading}
            />
          </Modal.Window>
        </Modal>
      </div>
    </StyledOrderList>
  );
}

export default OrderList;
