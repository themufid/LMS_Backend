# API LMS
This API built using Node.js and Express Framework

### Menguji API dengan Postman
1. **User**
    - **POST** `/api/users/register` untuk mendaftarkan pengguna baru.
    - **POST** `/api/users/login` untuk login pengguna.
    - **GET** `/api/users` untuk mendapatkan daftar semua pengguna.
2. **Course**
    - **GET** `/api/courses` untuk mendapatkan daftar semua kursus.
    - **POST** `/api/courses` untuk membuat kursus baru.
3. **Teacher**
    - **GET** `/api/teachers` untuk mendapatkan daftar semua guru.
    - **POST** `/api/teachers` untuk membuat guru baru.
4. **Enrollment**
    - **GET** `/api/enrollments` untuk mendapatkan daftar semua pendaftaran.
    - **POST** `/api/enrollments` untuk mendaftarkan pengguna ke kursus.
5. **Content**
    - **GET** `/api/contents` untuk mendapatkan daftar semua konten.
    - **POST** `/api/contents` untuk membuat konten baru.
6. **Assessment**
    - **GET** `/api/assessments` untuk mendapatkan daftar semua penilaian.
    - **POST** `/api/assessments` untuk membuat penilaian baru.
7. **Report**
    - **GET** `/api/reports` untuk mendapatkan daftar semua laporan.
    - **POST** `/api/reports` untuk membuat laporan baru.