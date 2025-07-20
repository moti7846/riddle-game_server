import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config();


const sb = createClient(process.env.DB_URL_SUPABASE , process.env.DB_PUBLIC_SECRET_SUPABASE);

export default sb;