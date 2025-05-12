import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mygrteyyvwgepsfgvrhp.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15Z3J0ZXl5dndnZXBzZmd2cmhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5MzM5NTIsImV4cCI6MjA2MjUwOTk1Mn0.G_uVZtpYMJHjvKRd-LMgfCqIcEfLyd9dxIbM8tWRn8g'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);