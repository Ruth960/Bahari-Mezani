import { supabase } from '../supabaseClient';

export async function fetchProjects() {
  const { data, error } = await supabase.from('projects').select('*');
  if (error) throw error;
  return data;
}