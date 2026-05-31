import { createClient } from '@supabase/supabase-js';

// เปลี่ยนตรงนี้เป็นค่าจริงของคุณไปก่อน เพื่อเช็คว่า Error หายไหม
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "ใส่URLของคุณที่นี่";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "ใส่KEYของคุณที่นี่";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);