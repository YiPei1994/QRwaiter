import { useQuery } from '@tanstack/react-query';
import { getMenus } from '../../services/apiMenus';

export function useMenus() {
  const {
    data: menus,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['menus'],
    queryFn: getMenus,
  });
  return { menus, isLoading, error };
}
