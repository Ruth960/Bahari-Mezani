import { supabase } from '../supabaseClient';

export async function subscribeToNewsletter(email) {
  const { data, error } = await supabase.from('newsletter').insert([{ email }]);
  if (error) throw error;
  return data;
}