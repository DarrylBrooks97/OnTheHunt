import { createClient, SupabaseClient } from '@supabase/supabase-js';

if (!process.env.SUPABASE_URL)
	throw Error('Supabase URL not found in environment');
if (!process.env.SUPABASE_KEY)
	throw Error('Supabase KEY not found in environment');

export const supabase: SupabaseClient = createClient(
	process.env.SUPABASE_URL as string,
	process.env.SUPABASE_KEY as string
);
