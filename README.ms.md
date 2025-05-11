# YAML-EnvPeek

Sambungan Visual Studio Code yang menyediakan fungsi rujukan pembolehubah persekitaran untuk fail YAML.

## Ciri-ciri

- **Hover Pembolehubah Persekitaran**: Apabila mengarahkan tetikus ke atas `${VARIABLE_NAME}` atau `${env:VARIABLE_NAME}` dalam fail YAML, nilai sebenar dari fail `.env` akan dipaparkan
- **Navigasi Definisi**: 
  - Command+klik (Mac) atau Ctrl+klik (Windows/Linux) pada pembolehubah persekitaran untuk melompat ke definisinya
  - Klik pada laluan fail dalam mesej hover untuk membuka fail definisi
- **Sokongan Pelbagai Fail .env**: Mencari semua fail `.env` (termasuk `.xxxenv`) dari direktori semasa sehingga akar ruang kerja
- **Maklum Balas yang Jelas**: Memaparkan mesej amaran apabila pembolehubah persekitaran tidak dijumpai

## Cara Penggunaan

1. Buka fail YAML yang mengandungi rujukan pembolehubah persekitaran
2. Arahkan tetikus ke atas `${VARIABLE_NAME}` atau `${env:VARIABLE_NAME}` untuk melihat nilainya
3. Gunakan Command+klik (Mac) atau Ctrl+klik (Windows/Linux) untuk melompat ke definisi
4. Klik pada laluan fail dalam mesej hover untuk membuka fail definisi

## Contoh

```yaml
environment:
  DATABASE_URL: ${DATABASE_URL}
  API_KEY: ${env:API_KEY}
```

Apabila mengarahkan tetikus ke atas `${DATABASE_URL}` akan dipaparkan:
```
DATABASE_URL → postgresql://localhost:5432/mydb
(from .env)
```

## Keperluan

- Visual Studio Code versi 1.100.0 atau lebih tinggi

## Tetapan Sambungan

Sambungan ini menyediakan tetapan berikut:

* `yaml-envpeek.enable`: Mengaktifkan/menyahaktifkan sambungan ini

## Isu yang Diketahui

Tiada pada masa ini.

## Nota Pelepasan

### 0.0.1

Pelepasan awal YAML-EnvPeek:
- Fungsi hover pembolehubah persekitaran asas
- Navigasi definisi
- Sokongan pelbagai fail .env
- Maklum balas yang jelas untuk pembolehubah yang tidak ditakrifkan

## Sumbangan

Sila buka isu atau hantar pull request di GitHub.

## Lesen

Sambungan ini dilesenkan di bawah Lesen MIT. 