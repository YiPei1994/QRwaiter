import { useQuery } from '@tanstack/react-query';
import { getOrders } from '../../services/apiOrders';

export function useOrders() {
  const {
    data: orders,
    isLoading,
    error,
  } = useQuery({
    queryFn: getOrders,
    queryKey: ['orders'],
  });
  return {
    orders,
    isLoading,
    error,
  };
}
