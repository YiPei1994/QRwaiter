import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createOrder as apiCreateOrder } from '../../services/apiOrders';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useCreateOrder() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: createOrder, isLoading } = useMutation({
    mutationFn: apiCreateOrder,
    onSuccess: () => {
      toast.success('New order was successfully created!');
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      navigate('/orders');
    },
    onError: (err) => toast.error(err.message),
  });
  return { createOrder, isLoading };
}
