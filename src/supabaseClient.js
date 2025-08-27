import { createClient } from '@supabase/supabase-js';

// These variables are pulled from your .env.local file.
// Make sure that file exists and is correctly filled out.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// This export is the connection client used throughout your app.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);