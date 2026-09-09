import type { CurriculumBlock } from "../types";

const pythonCore: CurriculumBlock = {
  title: "Python Core (prasyarat)",
  note: "Dilewati jika Anda sudah menyelesaikan Explorer atau lulus assessment.",
  sessions: [
    {
      number: "1",
      title: "Review Python & Setup Dev",
      topics: "VS Code, venv, pip, git init",
      youWillLearn: [
        "Mengonfigurasi VS Code untuk Python dengan ekstensi dan terminal terintegrasi",
        "Membuat dan mengaktifkan virtual environment dengan venv",
        "Menginstal paket dengan pip dan melacaknya di requirements.txt",
        "Menginisialisasi repo Git dan membuat commit pertama",
      ],
    },
    {
      number: "2",
      title: "Fungsi Lanjutan",
      topics: "*args, **kwargs, intro decorators",
      youWillLearn: [
        "Menerima argumen variabel dengan *args dan **kwargs",
        "Menulis higher-order function yang menerima atau mengembalikan fungsi lain",
        "Menerapkan decorator sederhana untuk log atau timing pemanggilan fungsi",
        "Merefaktor signature fungsi berulang menggunakan unpacking",
      ],
    },
    {
      number: "3",
      title: "OOP Mendalam",
      topics: "Inheritance, polimorfisme, dunder methods",
      youWillLearn: [
        "Memodelkan inheritance dengan super() dan method overriding",
        "Menggunakan polimorfisme agar kelas berbeda berbagi interface umum",
        "Mengimplementasikan __str__, __repr__, dan dunder methods perbandingan",
        "Mendesain hierarki kelas kecil untuk masalah domain",
      ],
    },
    {
      number: "4",
      title: "Error Handling",
      topics: "try/except/finally, custom exceptions",
      youWillLearn: [
        "Menangkap exception spesifik alih-alih bare except",
        "Menggunakan blok finally dan else untuk cleanup dan jalur sukses",
        "Mendefinisikan kelas exception kustom untuk error domain",
        "Mengembalikan pesan error yang jelas dari operasi yang gagal",
      ],
    },
    {
      number: "5",
      title: "Bekerja dengan Data",
      topics: "JSON, CSV, os/pathlib, environment variables",
      youWillLearn: [
        "Membaca dan menulis file JSON dan CSV dengan standard library",
        "Menavigasi path dengan aman menggunakan pathlib alih-alih string path",
        "Memuat secret dan konfigurasi dari environment variables",
        "Memvalidasi input file sebelum memproses data batch",
      ],
    },
    {
      number: "6",
      title: "API & HTTP",
      topics: "Library requests, konsep REST, mengonsumsi API",
      youWillLearn: [
        "Mengirim request GET dan POST dengan library requests",
        "Memparsing respons JSON dan menangani status code HTTP",
        "Memahami resource REST, endpoint, dan semantik status",
        "Membangun skrip kecil yang mengonsumsi API publik",
      ],
    },
    {
      number: "7",
      title: "Git & Kolaborasi",
      topics: "Branching, pull request, .gitignore, README",
      youWillLearn: [
        "Membuat feature branch dan merge dengan pull request",
        "Menulis README dengan setup, penggunaan, dan ringkasan proyek",
        "Memelihara .gitignore yang berguna untuk proyek Python",
        "Mereview PR peer untuk kejelasan, tes, dan kebersihan commit",
      ],
    },
    {
      number: "8",
      title: "Assessment",
      topics: "Tes proyek praktis — membuka pemilihan jalur",
      youWillLearn: [
        "Menyelesaikan tes praktis berbatas waktu mencakup fungsi, OOP, dan file",
        "Mengonsumsi API dan menyimpan hasil sebagai bagian assessment",
        "Mendemonstrasikan workflow Git dengan commit di feature branch",
        "Menerima hasil lulus yang membuka pemilihan jalur FastAPI atau full-stack",
      ],
      deliverable: "Proyek assessment praktis — lulus diperlukan untuk pemilihan jalur",
    },
  ],
};

export const curriculum: CurriculumBlock[] = [
  pythonCore,
  {
    title: "Sub-jalur B1 — Frontend: React / Next.js (6 sesi)",
    sessions: [
      {
        number: "1",
        title: "Fondasi JS/TS",
        topics: "Tipe, ES6+, async/await, dasar Node",
        youWillLearn: [
          "Menulis TypeScript dengan tipe dasar, interface, dan union",
          "Menggunakan sintaks ES6+: arrow function, destructuring, spread",
          "Menangani kode asynchronous dengan async/await dan fetch",
          "Menjalankan skrip Node dan memahami dasar paket npm",
        ],
      },
      {
        number: "2",
        title: "Fondasi React",
        topics: "JSX, komponen, props, useState",
        youWillLearn: [
          "Membangun functional component dengan JSX dan props",
          "Mengelola state UI lokal dengan hook useState",
          "Menyusun komponen kecil menjadi layout halaman",
          "Debug rendering React dengan browser devtools",
        ],
      },
      {
        number: "3",
        title: "Pola React",
        topics: "useEffect, conditional rendering, list & keys",
        youWillLearn: [
          "Menjalankan side effect dengan useEffect dan dependency array",
          "Merender list dengan map() dan key props yang stabil",
          "Menampilkan UI loading, kosong, dan error secara kondisional",
          "Menaikkan state saat dua komponen harus berbagi data",
        ],
      },
      {
        number: "4",
        title: "Next.js App Router",
        topics: "Halaman, layout, routing, server vs client components",
        youWillLearn: [
          "Membuat route dengan konvensi file App Router",
          "Membagikan chrome antar halaman dengan layout",
          "Memilih server vs client components untuk data dan interaktivitas",
          "Navigasi dengan Link dan usePathname untuk state aktif",
        ],
      },
      {
        number: "5",
        title: "Data Fetching",
        topics: "fetch, SWR, loading/error states, API routes",
        youWillLearn: [
          "Mengambil data di server components dan client hooks",
          "Menggunakan SWR atau serupa untuk revalidasi sisi klien",
          "Mengekspos API routes ringan di Next.js jika diperlukan",
          "Menangani loading dan error boundary di UI",
        ],
      },
      {
        number: "6",
        title: "Styling & Deployment",
        topics: "Dasar Tailwind CSS, deploy Vercel",
        youWillLearn: [
          "Menata komponen dengan utility class Tailwind",
          "Membangun layout responsif dengan flexbox dan grid utilities",
          "Deploy frontend ke Vercel dengan environment variables",
          "Memverifikasi build produksi secara lokal sebelum ship",
        ],
        deliverable: "Frontend Next.js ter-deploy di Vercel",
      },
    ],
  },
  {
    title: "Sub-jalur B2 — Backend: Express.js atau NestJS (6 sesi)",
    note: "Siswa memilih Express (lebih ringan, fleksibel) atau NestJS (terstruktur, gaya enterprise) sesuai tujuan.",
    sessions: [
      {
        number: "7",
        title: "Setup Backend",
        topics: "Express: server, middleware, routing · NestJS: CLI, modul, controller",
        youWillLearn: [
          "Express: bootstrap server Express dengan middleware dan route handler",
          "NestJS: generate aplikasi NestJS dengan modul dan controller via CLI",
          "Menyusun route untuk resource REST di framework mana pun",
          "Menghubungkan repo backend ke Git dengan struktur folder jelas",
        ],
      },
      {
        number: "8",
        title: "Database",
        topics: "Prisma + PostgreSQL (kedua jalur)",
        youWillLearn: [
          "Mendefinisikan skema Prisma dan generate client",
          "Menjalankan migrasi terhadap database PostgreSQL lokal",
          "Seed data development untuk integrasi frontend",
          "Menggunakan Prisma dari handler Express atau service NestJS",
        ],
      },
      {
        number: "9",
        title: "CRUD API",
        topics: "Express: REST endpoints · NestJS: services, DTOs, validation pipes",
        youWillLearn: [
          "Express: mengimplementasikan CRUD dengan modul router dan status code",
          "NestJS: memisahkan controller, service, dan DTO dengan validation pipes",
          "Memvalidasi request body sebelum menyentuh database",
          "Mendokumentasikan endpoint untuk konsumen frontend",
        ],
      },
      {
        number: "10",
        title: "Auth",
        topics: "Express: JWT + bcrypt · NestJS: Passport.js, Guards, JWT strategy",
        youWillLearn: [
          "Express: hash password dengan bcrypt dan sign JWT di route login",
          "NestJS: konfigurasi Passport JWT strategy dengan Guards di route terlindungi",
          "Menempelkan identitas user ke request dan menegakkan aturan ownership",
          "Mengembalikan respons 401/403 yang konsisten untuk kegagalan auth",
        ],
      },
      {
        number: "11",
        title: "Integrasi Full-stack",
        topics: "Menghubungkan frontend Next.js ke backend API",
        youWillLearn: [
          "Mengarahkan aplikasi Next.js ke base URL backend via env vars",
          "Mengirim request terautentikasi dengan header Authorization",
          "Menangani CORS dan pilihan penyimpanan cookie/token untuk dev lokal",
          "Menguji end-to-end login, CRUD, dan halaman terlindungi",
        ],
      },
      {
        number: "12",
        title: "Deploy + Demo Day",
        topics: "Backend Railway + frontend Vercel, demo live",
        youWillLearn: [
          "Deploy API ke Railway dengan DATABASE_URL dan JWT secrets produksi",
          "Menyambungkan env vars frontend Vercel ke URL backend live",
          "Smoke-test full stack di produksi sebelum presentasi",
          "Mempresentasikan pilihan arsitektur: Express vs NestJS, auth, dan deploy terpisah",
        ],
        deliverable: "Presentasi Demo Day full-stack live",
      },
    ],
  },
];
