// Supabase Configuration
// Setup: https://supabase.com/docs/guides/getting-started

window.__supabase_config = {
    url: "https://orazqadfjjvppiwmazdo.supabase.co", // https://your-project.supabase.co
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yYXpxYWRmamp2cHBpd21hemRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1OTU5OTgsImV4cCI6MjA4ODE3MTk5OH0.z-eiUYoS3sS9yjP6nYsn-uzQEs-_vOSy2fQlJvShvps" // Dari Project Settings > API
};

// Set true untuk mengaktifkan Supabase
window.__use_supabase = true;

/*
CARA SETUP SUPABASE:

1. Buat Project di https://supabase.com/
2. Copy Project URL dan anon key
3. Update konfigurasi di atas
4. Jalankan SQL schema (lihat file supabase-schema.sql)
5. Set window.__use_supabase = true

CONTOH KONFIGURASI:
window.__supabase_config = {
    url: "https://abcdefgh.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
};
window.__use_supabase = true;

KELEBIHAN SUPABASE:
✅ Open source (tidak lock-in vendor)
✅ Real-time sync built-in
✅ PostgreSQL backend (powerful)
✅ Gratis untuk small projects
✅ Mudah migrasi dari Firebase
✅ Auto-generated API
✅ Support edge functions

KEKURANGAN:
❌ Perlu setup database
❌ Learning curve untuk SQL
❌ Limited free tier bandwidth

TUTORIAL LENGKAP:
1. Sign up di https://supabase.com/
2. Create new project
3. Go to Settings > API
4. Copy URL dan anon key
5. Go to SQL Editor
6. Copy-paste schema dari supabase-schema.sql
7. Run schema
8. Update konfigurasi di file ini
9. Set __use_supabase = true
10. Refresh aplikasi
*/
