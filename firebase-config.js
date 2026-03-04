// Firebase Configuration Demo
// Ganti nilai-nilai di bawah dengan konfigurasi Firebase Anda sendiri

window.__firebase_config = `{
  "apiKey": "AIzaSyDemoKeyForTesting1234567890",
  "authDomain": "smart-absensi-demo.firebaseapp.com",
  "databaseURL": "https://smart-absensi-demo-default-rtdb.firebaseio.com",
  "projectId": "smart-absensi-demo",
  "storageBucket": "smart-absensi-demo.appspot.com",
  "messagingSenderId": "123456789012",
  "appId": "1:123456789012:web:demo1234567890abcdef12"
}`;

window.__app_id = "smart-absensi-demo";
window.__initial_auth_token = ""; // Optional: custom token untuk autentikasi awal

/*
CARA SETUP FIREBASE:
1. Buat project di https://console.firebase.google.com/
2. Enable Firestore Database
3. Buat Web App credential
4. Copy konfigurasi di atas
5. Update security rules di Firestore

SECURITY RULES (copy ke Firebase Console):
{
  "rules": {
    "apps": {
      "$appId": {
        "logs": {
          ".read": "auth != null",
          ".write": "auth != null",
          ".indexOn": ["date", "studentId", "time"]
        }
      }
    }
  }
}
*/
