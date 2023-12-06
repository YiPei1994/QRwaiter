import supabase from './supabase';

export async function getMenus() {
  const { data: menus, error } = await supabase.from('menus').select('*');

  if (error) {
    console.error(error);
    throw new Error('Menus could not be loaded');
  }
  return menus;
}
