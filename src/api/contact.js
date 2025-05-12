import { supabase } from '../supabaseClient';

export async function submitContactForm(name, email, message) {
  const { data, error } = await supabase.from('contact').insert([
    { name, email, message },
  ]);
  if (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
  return data;
}