import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("DEBUG - URL:", url); // <--- เช็คใน Console ของ Browser ว่าขึ้น undefined ไหม
console.log("DEBUG - KEY:", key); // <--- เช็คใน Console ของ Browser ว่าขึ้น undefined ไหม

export const supabase = createClient(url || "", key || "");