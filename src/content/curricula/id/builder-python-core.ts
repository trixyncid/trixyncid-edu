import type { CurriculumBlock } from "../types";

export const curriculum: CurriculumBlock[] = [
  {
    title: "Python Core — 8 sesi",
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
        topics: "Tes proyek praktis — prasyarat pemilihan jalur",
        youWillLearn: [
          "Menyelesaikan tes praktis berbatas waktu mencakup fungsi, OOP, dan file",
          "Mengonsumsi API dan menyimpan hasil sebagai bagian assessment",
          "Mendemonstrasikan workflow Git dengan commit di feature branch",
          "Menerima hasil lulus yang membuka pemilihan jalur FastAPI atau full-stack",
        ],
        deliverable: "Proyek assessment praktis — lulus diperlukan untuk pemilihan jalur",
      },
    ],
  },
];
