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
    title: "Jalur A — FastAPI Backend (12 sesi)",
    sessions: [
      {
        number: "1",
        title: "Pengenalan FastAPI",
        topics: "Setup proyek, uvicorn, endpoint pertama, auto docs",
        youWillLearn: [
          "Membuat proyek FastAPI dengan uvicorn sebagai ASGI server",
          "Mendefinisikan route GET dan memeriksa dokumentasi OpenAPI otomatis di /docs",
          "Mengembalikan respons JSON dengan status code yang tepat",
          "Menjalankan dan hot-reload API saat pengembangan lokal",
        ],
      },
      {
        number: "2",
        title: "Path & Query Params",
        topics: "Parameter route, query string, validasi",
        youWillLearn: [
          "Mendeklarasikan path parameter dengan type hints dan validasi",
          "Menerima parameter query string opsional dan wajib",
          "Mengembalikan respons 404 dan 422 untuk input hilang atau tidak valid",
          "Mendesain pola URL RESTful untuk pencarian resource",
        ],
      },
      {
        number: "3",
        title: "Model Pydantic",
        topics: "Skema request/response, validasi data",
        youWillLearn: [
          "Mendefinisikan model Pydantic untuk request body dan response",
          "Memanfaatkan validasi otomatis dan pesan error yang jelas",
          "Memisahkan model internal dari skema API publik jika diperlukan",
          "Mendokumentasikan field dengan tipe dan contoh untuk OpenAPI",
        ],
      },
      {
        number: "4",
        title: "Database dengan SQLAlchemy",
        topics: "Setup PostgreSQL, model, session, migrasi",
        youWillLearn: [
          "Menghubungkan FastAPI ke PostgreSQL dengan model SQLAlchemy",
          "Mengelola database session dengan pola dependency injection",
          "Menjalankan migrasi untuk mengembangkan skema dengan aman",
          "Memetakan model ORM ke skema Pydantic untuk output API",
        ],
      },
      {
        number: "5",
        title: "Operasi CRUD",
        topics: "GET, POST, PUT, DELETE dengan DB",
        youWillLearn: [
          "Mengimplementasikan endpoint create, read, update, dan delete",
          "Menggunakan HTTP verb dan status code secara konsisten (201, 204, 404)",
          "Menangani duplicate key dan pelanggaran constraint dengan baik",
          "Menguji alur CRUD end-to-end terhadap database lokal",
        ],
      },
      {
        number: "6",
        title: "Auth — JWT",
        topics: "Model user, hashing, JWT access token",
        youWillLearn: [
          "Menyimpan user dengan password ter-hash (bcrypt atau passlib)",
          "Mengeluarkan JWT access token saat login berhasil",
          "Mengonfigurasi expiry token dan signing secret via environment",
          "Tidak pernah mengembalikan hash password dalam respons API",
        ],
      },
      {
        number: "7",
        title: "Auth — Protected Routes",
        topics: "Depends(), verifikasi token, dasar role",
        youWillLearn: [
          "Melindungi route dengan Depends() dan dependency verifikasi token",
          "Mengekstrak user saat ini dari JWT yang valid",
          "Membatasi endpoint dengan pengecekan role atau ownership sederhana",
          "Mengembalikan 401 dan 403 dengan body error yang konsisten",
        ],
      },
      {
        number: "8",
        title: "Upload File & Background Tasks",
        topics: "UploadFile, BackgroundTasks",
        youWillLearn: [
          "Menerima upload file dengan UploadFile dan memvalidasi ukuran/tipe",
          "Menyimpan upload secara lokal atau pola object storage",
          "Mengalihkan pekerjaan lambat dengan BackgroundTasks setelah respons",
          "Mendokumentasikan endpoint upload di OpenAPI",
        ],
      },
      {
        number: "9",
        title: "Testing",
        topics: "pytest, TestClient, fixtures",
        youWillLearn: [
          "Menulis tes pytest menggunakan TestClient FastAPI",
          "Menggunakan fixtures untuk setup database dan klien terautentikasi",
          "Menguji happy path dan kasus kegagalan umum untuk auth dan CRUD",
          "Menjalankan tes dalam mode headless yang ramah CI",
        ],
      },
      {
        number: "10",
        title: "Deployment",
        topics: "Railway atau Render, konfigurasi environment, dasar CI",
        youWillLearn: [
          "Deploy API ke Railway atau Render dengan env vars produksi",
          "Mengonfigurasi DATABASE_URL dan JWT secrets di dashboard host",
          "Menjalankan migrasi terhadap database produksi dengan aman",
          "Menyiapkan pengecekan CI dasar yang menjalankan pytest saat push",
        ],
      },
      {
        number: "11",
        title: "Workshop Capstone",
        topics: "Pembangunan terpandu — proyek REST API nyata",
        youWillLearn: [
          "Mendefinisikan capstone API dengan auth, CRUD, dan minimal satu fitur tambahan",
          "Mengimplementasikan fitur secara bertahap dengan Git branch",
          "Memoles dokumentasi OpenAPI dan README untuk portofolio",
          "Menggabungkan umpan balik instruktur sebelum Demo Day",
        ],
        deliverable: "Proyek capstone REST API ter-deploy",
      },
      {
        number: "12",
        title: "Demo Day",
        topics: "Presentasi live, walkthrough kode, umpan balik",
        youWillLearn: [
          "Mempresentasikan arsitektur API: route, auth, database, deployment",
          "Menjelaskan request live di /docs atau klien",
          "Menjelaskan trade-off dalam pilihan skema dan keamanan",
          "Mengumpulkan umpan balik untuk polish portofolio pasca-cohort",
        ],
        deliverable: "Presentasi Demo Day API live",
      },
    ],
  },
];
