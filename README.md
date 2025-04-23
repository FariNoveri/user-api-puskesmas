```
# User API Puskesmas

Halo semuanya! 👋  
Ini adalah **User API Puskesmas**, project simpel tapi powerful buat mengelola user di sistem Puskesmas!  
Dibuat penuh semangat sama **Fari**, terinspirasi oleh karakter kesayangan, **Illyasviel** ✨

---

## Tentang Aplikasi Ini

Aplikasi ini bertujuan untuk:
- Mengelola data user (tambah, lihat, update, login)
- Simulasi database ringan pakai file JSON
- Memberikan contoh API berbasis Express.js yang mudah dipahami bahkan untuk pemula
- Menggunakan Swagger untuk dokumentasi API biar gampang testing dan ngembanginnya

Target utamanya: **Membantu Puskesmas atau mini project yang butuh manajemen user!** 🚀
```
---

## Teknologi yang Dipakai

- **Node.js** 🚀
- **Express.js** ⚡
- **Swagger UI** 📜 (buat dokumentasi interaktif)
- **JSON** 📂 (sebagai database lokal)

---

## Struktur Folder
```

├── controllers/
│   └── userController.js
├── routes/
│   └── userRoutes.js
├── swagger.js
├── server.js
├── data/
│   └── users.json (database user lokal)
└── README.md
```


**Penjelasan:**
- `controllers/` ➔ Tempat logika handling user.
- `routes/` ➔ Tempat semua endpoint user.
- `swagger.js` ➔ Settingan buat dokumentasi Swagger.
- `server.js` ➔ File utama buat jalanin server Express.
- `data/` ➔ Simpanan data user lokal (simulasi database).

---

## Cara Install dan Jalankan

Gampang banget bro/sis 😎✨

```bash
git clone https://github.com/FariNoveri/user-api-puskesmas.git
cd user-api-puskesmas
npm install
npm run dev
```

Kalau sukses, API jalan di:
- **Server:** [http://localhost:3001](http://localhost:3001)
- **Swagger Dokumentasi:** [http://localhost:3001/api-docs](http://localhost:3001/api-docs)

---

## Daftar Endpoint (API)

| Metode | Endpoint                  | Deskripsi                       |
|--------|----------------------------|---------------------------------|
| GET    | `/users`                   | Ambil semua data user           |
| POST   | `/users`                   | Buat user baru                  |
| PUT    | `/users/:userId`            | Update data user berdasarkan ID |
| PATCH  | `/users/verify-email/:userId` | Verifikasi email user           |
| POST   | `/users/login`              | Login user                      |

Swagger sudah siap buat klik-klik langsung dari browser! 🚀

---

## Preview Illyasviel ✨

Karena semangat kita dari **Illyasviel**, pastinya harus ada foto dan GIF nya!

![Illyasviel Image](https://static.zerochan.net/Illyasviel.von.Einzbern.full.2117054.jpg)

> "Walaupun kecil, cahaya tetap bersinar di kegelapan." — **Illyasviel**

Dan GIF biar tambah mood coding! 🚀

![Illyasviel GIF](https://media.tenor.com/LCEeGkKKQF0AAAAd/illyasviel-fate.gif)

---

## Dibuat Oleh

❤️ **Fari** (FariNoveri)  
Semangat dan cinta terhadap dunia coding... dan tentunya, untuk **Illyasviel von Einzbern**. 🥰

---

> Kalau mau belajar bareng atau diskusi tentang coding dan Illya, jangan sungkan kontak aku! 🚀
```
