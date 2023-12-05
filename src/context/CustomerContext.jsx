import { createContext, useContext, useState } from 'react';

const CustomerContext = createContext();

function CustomerContextProvider({ children }) {
  const [table, setTable] = useState('');
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
    setAddedMenus((prevMenus) => {
      const updatedMenus = prevMenus.map((menu) => {
        if (menu.id === id) {
          return { ...menu, quantity: menu.quantity + 1 };
        }
        return menu;
      });
      return updatedMenus;
    });
  }

  function handleMinusQuantity(id) {
    setAddedMenus((prevMenus) => {
      const updatedMenus = prevMenus.map((menu) => {
        if (menu.id === id) {
          return { ...menu, quantity: menu.quantity - 1 };
        }
        return menu;
      });
      return updatedMenus;
    });
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
        handleAddMenu,
        menusQuantity,
        menusTotalPrice,
        addedMenus,
        handleAddQuantity,
        handleMinusQuantity,
        handleDelete,
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
