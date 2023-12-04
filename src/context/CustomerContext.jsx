import { createContext, useContext, useState } from 'react';

const CustomerContext = createContext();

function CustomerContextProvider({ children }) {
  const [table, setTable] = useState('');

  return (
    <CustomerContext.Provider value={{ table, setTable }}>
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
