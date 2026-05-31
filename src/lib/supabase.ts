import { createClient } from '@supabase/supabase-js';

// ใช้ 'any' เพื่อข้ามการตรวจสอบ Type ของ TypeScript ทั้งหมด
const env = process.env as any;

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);