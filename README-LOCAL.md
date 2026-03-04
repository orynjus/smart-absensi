# Smart Absensi v7.0 Local

Sistem absensi siswa berbasis web dengan penyimpanan lokal (tanpa Firebase).

## Fitur Utama

- **QR Code Scanner** - Presensi siswa dengan QR code
- **Local Storage** - Data tersimpan di browser (tidak perlu Firebase)
- **Google Sheets Integration** - Backup data ke Google Sheets (opsional)
- **WhatsApp Notifications** - Notifikasi otomatis ke orang tua
- **Multi-user Authentication** - Login terpisah untuk Admin dan Scanner
- **Print Cards** - Cetak kartu QR code siswa
- **Real-time Monitoring** - Dashboard monitoring absensi

## Arsitektur

- **Frontend**: HTML5, TailwindCSS, JavaScript
- **Backend**: Google Apps Script (opsional)
- **Database**: Local Storage + Google Sheets (opsional)
- **Deployment**: Static hosting (Vercel, Netlify, GitHub Pages)
- **Notifications**: Fonnte API / WhatsApp Web

## Setup Instructions

### 1. Langsung Digunakan

1. Download file `index.html`
2. Buka di browser modern
3. Aplikasi siap digunakan!

### 2. Google Sheets Integration (Opsional)

1. Copy `code.gs` ke Google Apps Script
2. Update `SPREADSHEET_ID` dengan ID Spreadsheet Anda
3. Deploy sebagai Web App
4. Copy deployment URL ke pengaturan aplikasi

## Default Credentials

- **Admin Password**: `admin123`
- **Scanner Password**: `scan123`

## Struktur File

```
smart/
├── index.html          # Frontend aplikasi (lengkap)
├── code.gs            # Google Apps Script backend (opsional)
├── vercel.json        # Konfigurasi deployment
└── README-LOCAL.md    # Dokumentasi versi local
```

## Perbedaan dengan Versi Cloud

| Fitur | Cloud Version | Local Version |
|-------|---------------|---------------|
| Database | Firebase Firestore | Local Storage |
| Multi-device Sync | ✅ Real-time | ❌ Single device |
| Setup Complexity | ⭐⭐⭐ | ⭐ |
| Internet Dependency | Required | Optional |
| Data Persistence | Cloud | Browser only |

## Fitur Detail

### Scanner Module
- QR code scanning dengan HTML5-QRCode
- Validasi waktu absensi (masuk/pulang)
- Feedback visual dan audio
- Proteksi password

### Admin Module
- Manajemen data siswa
- Sinkronisasi dengan Google Sheets (opsional)
- Cetak kartu QR massal
- Pengaturan sistem

### Monitoring Module
- Dashboard real-time (per device)
- Filter per kelas
- Statistik kehadiran
- Search functionality

## Data Management

### Local Storage Keys
- `abs_students` - Data siswa
- `abs_config` - Konfigurasi sistem
- `abs_logs` - Riwayat absensi

### Export/Import Data
- Export data ke JSON
- Import data dari file
- Backup ke Google Sheets

## Security Features

- Password-based authentication
- Input validation
- Local storage encryption (browser)
- HTTPS enforcement (recommended)

## Deployment Options

### Static Hosting
```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod

# GitHub Pages
# Upload ke repository dan enable Pages
```

### Local Development
```bash
# Python 3
python -m http.server 8080

# Node.js
npx serve -s . -p 8080
```

## Troubleshooting

### Local Storage Full
- Clear browser data
- Export data sebelum dihapus
- Gunakan browser dengan storage besar

### QR Scanner Not Working
- Allow camera permissions
- Use HTTPS in production
- Update browser ke versi terbaru

### WhatsApp Notification Issues
- Validate Fonnte token
- Check phone number format
- Test message template

## Limitations

- **Single Device**: Data hanya tersimpan di browser yang digunakan
- **Storage Limit**: Tergantung kapasitas browser (biasanya 5-10MB)
- **No Real-time Sync**: Tidak ada sinkronisasi antar perangkat
- **Data Loss Risk**: Data hilang jika browser cache dihapus

## Recommendations

- **For Testing**: Perfect untuk demo dan testing
- **Small Scale**: Cocok untuk kelas dengan <50 siswa
- **Backup**: Rutin export data ke file JSON
- **Production**: Gunakan versi Cloud untuk multi-device

## Support

**Developer**: Bangkit Cerdas Mandiri
**Version**: 7.0 Local
**Last Updated**: 2026
