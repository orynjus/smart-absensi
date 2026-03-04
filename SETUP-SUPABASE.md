# Setup Supabase untuk Smart Absensi

## 🚀 Langkah 1: Buat Project Supabase

1. **Sign up** di https://supabase.com/
2. **Create new project**
   - Pilih organization
   - Beri nama project (misal: "smart-absensi")
   - Pilih database password
   - Pilih region terdekat
3. **Tunggu** project dibuat (2-3 menit)

## 🔑 Langkah 2: Dapatkan Credentials

1. **Go to Project** → **Settings** → **API**
2. **Copy Project URL**: `https://your-project.supabase.co`
3. **Copy anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## 🗄️ Langkah 3: Setup Database Schema

1. **Go to SQL Editor**
2. **New query**
3. **Copy-paste** isi dari `supabase-schema.sql`
4. **Run** query
5. **Verify** tables terbuat di **Table Editor**

## ⚙️ Langkah 4: Konfigurasi Aplikasi

Edit file `sync-supabase.js`:

```javascript
window.__supabase_config = {
    url: "https://your-project.supabase.co", // Ganti dengan URL Anda
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." // Ganti dengan key Anda
};

window.__use_supabase = true; // Aktifkan Supabase
```

## 🧪 Langkah 5: Testing

1. **Buka** `index.html` di browser
2. **Check console** untuk "Supabase connected"
3. **Test scan** QR code
4. **Buka** di browser lain untuk test real-time sync

## 📊 Struktur Database

### absensi_logs table
- `id` - Timestamp ID
- `student_id` - ID siswa
- `name` - Nama siswa  
- `kelas` - Kelas siswa
- `date` - Tanggal absensi
- `time` - Waktu absensi
- `type` - Jenis (Masuk/Terlambat/Pulang)
- `method` - Metode (Scan/Manual)
- `app_id` - App identifier
- `created_at` - Timestamp

### students table (optional)
- `id` - ID siswa
- `name` - Nama lengkap
- `kelas` - Kelas
- `parent` - Nama orang tua
- `phone` - Nomor WhatsApp
- `app_id` - App identifier

## 🔐 Security Features

- **Row Level Security (RLS)** - Data terisolasi per app
- **API Key Authentication** - Akses terbatas
- **Real-time Subscriptions** - Update otomatis
- **Index Optimization** - Query cepat

## 📈 Monitoring

1. **Dashboard** Supabase untuk monitoring
2. **Logs** untuk debugging
3. **Usage** tracking
4. **Performance** metrics

## 🛠️ Troubleshooting

### Connection Failed
```javascript
// Check console untuk error
console.log("Supabase config:", window.__supabase_config);
```

### Real-time Not Working
- Verify RLS policies
- Check table permissions
- Restart browser

### Data Not Saving
- Check SQL schema
- Verify API key
- Check network connection

## 💡 Tips

- **Start dengan free tier** (500MB database, 2GB bandwidth)
- **Use environment variables** untuk production
- **Regular backup** data
- **Monitor usage** untuk avoid limits
- **Consider edge functions** untuk complex logic

## 🆚 Supabase vs Firebase

| Feature | Supabase | Firebase |
|---------|-----------|----------|
| Database | PostgreSQL | NoSQL |
| Pricing | Open source | Google ecosystem |
| Real-time | Built-in | Built-in |
| Language | SQL | NoSQL queries |
| Vendor lock-in | ❌ Low | ✅ High |
| Self-hosting | ✅ Possible | ❌ No |

Supabase adalah pilihan excellent untuk yang mau:
- **Open source solution**
- **SQL database power**
- **No vendor lock-in**
- **Easy Firebase migration**

Happy coding! 🚀
