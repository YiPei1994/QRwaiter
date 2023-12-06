import supabase from './supabase';

export async function getOrders() {
  const { data: orders, error } = await supabase.from('orders').select('*');

  if (error) {
    console.error(error);
    throw new Error('Orders could not be loaded');
  }
  return orders;
}

export async function createOrder({ tableId, totalPrice, addedMenus }) {
  let modifiedMenus = null;

  // Check if addedMenus is defined and not empty before mapping
  if (addedMenus && addedMenus.length > 0) {
    modifiedMenus = addedMenus.map(
      ({ id, name, quantity, price, customerNote }) => ({
        id,
        name,
        quantity,
        price,
        customerNote,
      }),
    );
  }

  const { data, error } = await supabase
    .from('orders')
    .insert([{ tableId, totalPrice, addedMenus: modifiedMenus }])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Orders could not be created');
  }
  return data;
}
