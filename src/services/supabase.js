import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://rqdoyidesafzifuqlmsw.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxZG95aWRlc2FmemlmdXFsbXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2OTExNjYsImV4cCI6MjAxNzI2NzE2Nn0.pXwXoWgLPzLC_g5ebK9fvdMR0X4IdXtUluzNaMwGjpE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
