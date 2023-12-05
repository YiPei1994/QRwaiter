import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import { useCustomerContext } from '../context/CustomerContext';
import Modal from './Modal';
import OrderList from '../features/Order/OrderList';
import Button from './Button';

const StyledFooter = styled.footer`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  z-index: 10;
  justify-content: space-between;
  position: relative;
  bottom: 0;
`;

const InnerFooter = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
function Footer() {
  const { menusQuantity, menusTotalPrice } = useCustomerContext();

  return (
    <StyledFooter>
      <Modal>
        {menusQuantity !== 0 && (
          <InnerFooter>
            <Heading as="h3">
              You have {menusQuantity} items in your orderlist with total price
              of {menusTotalPrice} kc
            </Heading>
            <Modal.Open opens="orderlist">
              <Button>Open order list</Button>
            </Modal.Open>
          </InnerFooter>
        )}
        <Modal.Window name="orderlist">
          <OrderList />
        </Modal.Window>
      </Modal>
    </StyledFooter>
  );
}

export default Footer;
