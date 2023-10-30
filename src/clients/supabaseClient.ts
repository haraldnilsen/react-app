import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl: string = 'https://ulpdpiggwjhzhaertqeq.supabase.co';
const supabaseKey: string = process.env.REACT_APP_SUPABASE_KEY;
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;