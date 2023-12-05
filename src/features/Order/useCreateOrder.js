import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createOrder as apiCreateOrder } from '../../services/apiOrders';
import toast from 'react-hot-toast';

export function useCreateOrder() {
  const queryClient = useQueryClient();
  const { mutate: createOrder, isLoading } = useMutation({
    mutationFn: apiCreateOrder,
    onSuccess: () => {
      toast.success('New order was successfuly created!');
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createOrder, isLoading };
}
