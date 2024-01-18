import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mmzufierqrrydxvbjrpl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tenVmaWVycXJyeWR4dmJqcnBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNzE4NjYsImV4cCI6MjAyMDY0Nzg2Nn0.7gnXO5e5Rpd16dNrGvbVte27ivun50JiSYPGfDXq8sE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
