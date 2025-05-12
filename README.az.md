# YAML-EnvPeek

YAML faylları üçün mühit dəyişənlərinə istinad funksionallığı təqdim edən Visual Studio Code genişlənməsi.

## Xüsusiyyətlər

- **Mühit Dəyişənləri Hover**: YAML fayllarındakı `${VARIABLE_NAME}` və ya `${env:VARIABLE_NAME}` üzərində hover edərkən `.env` fayllarından faktiki dəyəri göstərir
- **Tərif Naviqasiyası**: 
  - Mühit dəyişənləri üzərində Command+klik (Mac) və ya Ctrl+klik (Windows/Linux) ilə tərifə keçid
  - Hover mesajındakı fayl yoluna klikləyərək tərif faylını açmaq
- **Çoxlu .env Fayl Dəstəyi**: Cari qovluqdan iş sahəsinin kökünə qədər bütün `.env` fayllarını (`.xxxenv` daxil) axtarır
- **Aydın Geri Bildirim**: Mühit dəyişəni tapılmadıqda xəbərdarlıq mesajı göstərir

## İstifadə

1. Mühit dəyişənlərinə istinadları olan YAML faylını açın
2. `${VARIABLE_NAME}` və ya `${env:VARIABLE_NAME}` üzərində hover edərək dəyəri görün
3. Command+klik (Mac) və ya Ctrl+klik (Windows/Linux) ilə tərifə keçid edin
4. Hover mesajındakı fayl yoluna klikləyərək tərif faylını açın

## Nümunə

```yaml
environment:
  DATABASE_URL: ${DATABASE_URL}
  API_KEY: ${env:API_KEY}
```

`${DATABASE_URL}` üzərində hover edərkən göstərilir:
```
DATABASE_URL → postgresql://localhost:5432/mydb
(from .env)
```

## Tələblər

- Visual Studio Code 1.100.0 və ya daha yüksək

## Genişlənmə Parametrləri

Bu genişlənmə aşağıdakı parametrləri təqdim edir:

* `yaml-envpeek.enable`: Bu genişlənməni aktivləşdirmək/deaktiv etmək

## Məlum Problemlər

Hal-hazırda yoxdur.

## Buraxılış Qeydləri

### 0.2.0

- Çoxdilli sənədlərin dəstəyi əlavə edildi (İngiliscə, Yaponca, Koreyaca, Çincə, Azərbaycanca, Farsça, Vyetnamca, Malayca, İndoneziya dili)
- Genişlənmə ikonu əlavə edildi
- VS Code 1.96.0 və daha yüksək versiyaları ilə uyğunluq təkmilləşdirildi

### 0.1.0

YAML-EnvPeek-in ilk buraxılışı:
- Əsas mühit dəyişənləri hover funksionallığı
- Tərif naviqasiyası
- Çoxlu .env fayl dəstəyi
- Təyin edilməmiş dəyişənlər üçün aydın geri bildirim

## Töhfə

GitHub-da problem açın və ya pull request göndərin.

## Lisenziya

Bu genişlənmə MIT lisenziyası altında təqdim olunur. 