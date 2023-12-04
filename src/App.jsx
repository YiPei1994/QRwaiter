import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Applayout from './ui/Applayout';
import Tables from './pages/Tables';
import Dashboard from './pages/dashboard';
import Menus from './pages/menus';
import Orders from './pages/orders';
import Menu from './pages/Menu';
import Order from './pages/order';
import Favourites from './pages/Favourites';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import { CustomerContextProvider } from './context/CustomerContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <CustomerContextProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<Applayout />}>
              <Route index element={<Navigate replace to="tables" />} />
              <Route path="tables" element={<Tables />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="favourites" element={<Favourites />} />
              <Route path="menus" element={<Menus />} />
              <Route path="menus/:menuId" element={<Menu />} />
              <Route path="orders" element={<Orders />} />
              <Route path="order/:orderId" element={<Order />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            sucess: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: 'var(--color-grey-0)',
              color: 'var(--color-grey-700)',
            },
          }}
        />
      </QueryClientProvider>
    </CustomerContextProvider>
  );
}

export default App;
