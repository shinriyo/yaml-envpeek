# YAML-EnvPeek

Ekstensi Visual Studio Code yang menyediakan fungsi referensi variabel lingkungan untuk file YAML.

## Fitur

- **Hover Variabel Lingkungan**: Saat mengarahkan kursor ke `${VARIABLE_NAME}` atau `${env:VARIABLE_NAME}` dalam file YAML, nilai sebenarnya dari file `.env` akan ditampilkan
- **Navigasi Definisi**: 
  - Command+klik (Mac) atau Ctrl+klik (Windows/Linux) pada variabel lingkungan untuk melompat ke definisinya
  - Klik pada jalur file dalam pesan hover untuk membuka file definisi
- **Dukungan Banyak File .env**: Mencari semua file `.env` (termasuk `.xxxenv`) dari direktori saat ini hingga akar ruang kerja
- **Umpan Balik yang Jelas**: Menampilkan pesan peringatan ketika variabel lingkungan tidak ditemukan

## Cara Penggunaan

1. Buka file YAML yang berisi referensi variabel lingkungan
2. Arahkan kursor ke `${VARIABLE_NAME}` atau `${env:VARIABLE_NAME}` untuk melihat nilainya
3. Gunakan Command+klik (Mac) atau Ctrl+klik (Windows/Linux) untuk melompat ke definisi
4. Klik pada jalur file dalam pesan hover untuk membuka file definisi

## Contoh

```yaml
environment:
  DATABASE_URL: ${DATABASE_URL}
  API_KEY: ${env:API_KEY}
```

Saat mengarahkan kursor ke `${DATABASE_URL}` akan ditampilkan:
```
DATABASE_URL → postgresql://localhost:5432/mydb
(from .env)
```

## Persyaratan

- Visual Studio Code versi 1.100.0 atau lebih tinggi

## Pengaturan Ekstensi

Ekstensi ini menyediakan pengaturan berikut:

* `yaml-envpeek.enable`: Mengaktifkan/menonaktifkan ekstensi ini

## Masalah yang Diketahui

Tidak ada saat ini.

## Catatan Rilis

### 0.0.1

Rilis awal YAML-EnvPeek:
- Fungsi hover variabel lingkungan dasar
- Navigasi definisi
- Dukungan banyak file .env
- Umpan balik yang jelas untuk variabel yang tidak terdefinisi

## Kontribusi

Silakan buka masalah atau kirim pull request di GitHub.

## Lisensi

Ekstensi ini dilisensikan di bawah Lisensi MIT. 