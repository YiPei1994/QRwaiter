import { createContext, useContext, useState } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const CustomerContext = createContext();

function CustomerContextProvider({ children }) {
  const [table, setTable] = useLocalStorageState('', 'table');
  const [addedMenus, setAddedMenus] = useState([]);

  function handleAddMenu(menu) {
    const menuId = menu.id;
    const existingMenuIndex = addedMenus.findIndex(
      (addedMenu) => addedMenu.id === menuId,
    );
    if (existingMenuIndex !== -1) {
      const updatedMenus = [...addedMenus];
      updatedMenus[existingMenuIndex].quantity += 1;
      setAddedMenus(updatedMenus);
    } else {
      setAddedMenus([...addedMenus, { ...menu, quantity: 1 }]);
    }
  }

  function handleAddQuantity(id) {
    const addQuantity = addedMenus.map((menu) =>
      menu.id === id ? { ...menu, quantity: menu.quantity + 1 } : menu,
    );
    setAddedMenus(addQuantity);
  }

  function handleMinusQuantity(id) {
    const minusQuantity = addedMenus.map((menu) =>
      menu.id === id
        ? { ...menu, quantity: menu.quantity > 0 ? menu.quantity - 1 : 0 }
        : menu,
    );
    setAddedMenus(minusQuantity);
  }

  function handleDelete(id) {
    const afterDelete = addedMenus.filter((menu) => menu.id !== id);
    setAddedMenus(afterDelete);
  }
  const menusQuantity = addedMenus
    ? addedMenus.reduce((acc, cur) => acc + cur.quantity, 0)
    : 0;

  const menusTotalPrice = addedMenus
    ? addedMenus.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
    : 0;

  return (
    <CustomerContext.Provider
      value={{
        table,
        setTable,
        menusQuantity,
        menusTotalPrice,
        addedMenus,

        handleAddQuantity,
        handleMinusQuantity,
        handleDelete,
        handleAddMenu,
        setAddedMenus,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}

function useCustomerContext() {
  const context = useContext(CustomerContext);
  if (context === undefined)
    throw new Error(
      'CustomerContext was used outside of CustomerContextProvider',
    );

  return context;
}

export { useCustomerContext, CustomerContextProvider };
