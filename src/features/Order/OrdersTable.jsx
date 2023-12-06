import React from 'react';
import { useOrders } from './useOrders';
import Spinner from '../../ui/Spinner';
import { useCustomerContext } from '../../context/CustomerContext';
import OwnerOrders from './OwnerOrders';
import CustomersOrders from './CustomersOrders';

function OrdersTable() {
  const { orders, isLoading } = useOrders();
  const { table } = useCustomerContext();
  if (isLoading) return <Spinner />;

  const filteredOrders = orders.filter((order) => order.tableId === table);

  return (
    <div>
      {!table
        ? orders.map((order) => <OwnerOrders key={order.id} order={order} />)
        : filteredOrders.map((order) => (
            <CustomersOrders key={order.id} order={order} />
          ))}
    </div>
  );
}

export default OrdersTable;
