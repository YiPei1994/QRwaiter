import React from 'react';
import Heading from '../../ui/Heading';
import CustomerOrderMenu from './CustomerOrderMenu';
import Button from '../../ui/Button';
import { FiEdit } from 'react-icons/fi';
import styled from 'styled-components';

const Order = styled.div`
  padding: 5rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function CustomersOrders({ order }) {
  const { tableId, status, addedMenus } = order;
  return (
    <Order>
      <div>
        <p>your table number is {tableId} </p>
        <Heading as="h3">{status} </Heading>
      </div>
      <div>
        {addedMenus.map((menu) => (
          <CustomerOrderMenu key={menu.id} menu={menu} />
        ))}
      </div>
      <div>
        <Button variation="success">
          <FiEdit />
          Edit
        </Button>
      </div>
    </Order>
  );
}

export default CustomersOrders;
