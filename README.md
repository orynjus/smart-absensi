<<<<<<< HEAD
# Smart Absensi v7.0 Cloud

Sistem absensi siswa berbasis web dengan integrasi Google Sheets dan sinkronisasi real-time multi-device.

## Fitur Utama

- **QR Code Scanner** - Presensi siswa dengan QR code
- **Real-time Sync** - Sinkronisasi data antar perangkat via Firebase
- **Google Sheets Integration** - Backup data ke Google Sheets
- **WhatsApp Notifications** - Notifikasi otomatis ke orang tua
- **Multi-user Authentication** - Login terpisah untuk Admin dan Scanner
- **Print Cards** - Cetak kartu QR code siswa
- **Live Monitoring** - Dashboard monitoring absensi real-time

## Arsitektur

- **Frontend**: HTML5, TailwindCSS, JavaScript
- **Backend**: Google Apps Script
- **Database**: Google Sheets + Firebase Firestore
- **Deployment**: Vercel
- **Notifications**: Fonnte API / WhatsApp Web

## Setup Instructions

### 1. Firebase Configuration

1. Buat project baru di [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Buat collection structure: `artifacts/{appId}/public/data/logs`
4. Copy konfigurasi Firebase ke `firebase-config.js`

```javascript
window.__firebase_config = `{
  "apiKey": "your-api-key",
  "authDomain": "your-project.firebaseapp.com",
  "projectId": "your-project-id",
  "storageBucket": "your-project.appspot.com",
  "messagingSenderId": "123456789",
  "appId": "1:123456789:web:abc123"
}`;
```

### 2. Google Apps Script Setup

1. Copy `code.gs` ke Google Apps Script
2. Update `SPREADSHEET_ID` dengan ID Spreadsheet Anda
3. Deploy sebagai Web App
4. Copy deployment URL ke pengaturan aplikasi

### 3. Deployment ke Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Default Credentials

- **Admin Password**: `admin123`
- **Scanner Password**: `scan123`

## Struktur File

```
smart/
├── index.html          # Frontend aplikasi
├── code.gs            # Google Apps Script backend
├── firebase-config.js # Konfigurasi Firebase
├── vercel.json        # Konfigurasi deployment
└── README.md          # Dokumentasi
```

## API Endpoints

### Google Apps Script

- **GET** `/exec` - Ambil data siswa
- **POST** `/exec` - Simpan data absensi

### Firebase Firestore

- **Collection**: `artifacts/{appId}/public/data/logs`
- **Real-time updates** untuk sinkronisasi multi-device

## Fitur Detail

### Scanner Module
- QR code scanning dengan HTML5-QRCode
- Validasi waktu absensi (masuk/pulang)
- Feedback visual dan audio
- Proteksi password

### Admin Module
- Manajemen data siswa
- Sinkronisasi dengan Google Sheets
- Cetak kartu QR massal
- Pengaturan sistem

### Monitoring Module
- Dashboard real-time
- Filter per kelas
- Statistik kehadiran
- Search functionality

## Security Features

- Password-based authentication
- CORS protection
- Input validation
- Firebase security rules
- HTTPS enforcement

## Troubleshooting

### Firebase Connection Failed
- Periksa konfigurasi di `firebase-config.js`
- Pastikan Firestore enabled
- Verify security rules

### Google Sheets Sync Error
- Check deployment URL
- Verify spreadsheet permissions
- Update `SPREADSHEET_ID`

### WhatsApp Notification Issues
- Validate Fonnte token
- Check phone number format
- Test message template

## Support

**Developer**: Bangkit Cerdas Mandiri
**Version**: 7.0 Cloud
**Last Updated**: 2026
=======
# smart-absen
>>>>>>> ae47d7da276ca9fdee02c92c9d782cda4afac6d4
