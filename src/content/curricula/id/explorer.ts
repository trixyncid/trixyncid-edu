import type { CurriculumBlock } from "../types";

export const curriculum: CurriculumBlock[] = [
  {
    title: "Fase 1 — Fondasi Python",
    sessions: [
      {
        number: "1",
        title: "Setup & Skrip Pertama",
        topics: "VS Code atau Thonny, variabel, I/O dasar",
        youWillLearn: [
          "Menginstal dan membuka editor Python serta menjalankan skrip secara lokal",
          "Mendeklarasikan variabel dan memeriksa tipe dengan type()",
          "Memformat output dengan f-string dan metode string dasar",
          "Mengikuti konvensi file dan penamaan yang konsisten untuk proyek",
        ],
      },
      {
        number: "2",
        title: "Tipe & Operator",
        topics: "int, float, str, bool, aritmatika dan perbandingan",
        youWillLearn: [
          "Mengonversi antara string, integer, dan float dengan aman",
          "Menerapkan operator aritmatika, perbandingan, dan logika",
          "Memahami nilai truthy dan falsy dalam kondisi",
          "Membangun kalkulator atau konverter unit kecil",
        ],
      },
      {
        number: "3",
        title: "Input, Output & Formatting",
        topics: "input(), format string, validasi dasar",
        youWillLearn: [
          "Membaca dan memvalidasi input pengguna sebelum digunakan dalam logika",
          "Memformat angka dan teks untuk output konsol yang mudah dibaca",
          "Menangani input kosong atau tidak valid dengan pengecekan sederhana",
          "Menggabungkan input dan output dalam program menu terstruktur",
        ],
      },
    ],
  },
  {
    title: "Fase 2 — Alur Kontrol",
    sessions: [
      {
        number: "4",
        title: "Kondisional",
        topics: "if/elif/else, kondisi bersarang, logika boolean",
        youWillLearn: [
          "Menulis keputusan multi-cabang dengan if, elif, dan else",
          "Menggabungkan kondisi dengan and, or, dan not",
          "Menyusun kondisi bersarang untuk memodelkan aturan dunia nyata",
          "Merefaktor rantai if yang berantakan menjadi struktur lebih jelas",
        ],
      },
      {
        number: "5",
        title: "For & While Loop",
        topics: "for, while, range(), kontrol loop",
        youWillLearn: [
          "Memilih antara for dan while loop untuk tugas tertentu",
          "Menggunakan range() dan enumerate() dalam iterasi",
          "Mengontrol loop dengan break dan continue",
          "Mendeteksi dan memperbaiki bug off-by-one dan infinite loop",
        ],
      },
      {
        number: "6",
        title: "Logika Bersarang & Pola",
        topics: "Loop dalam kondisi, latihan pola",
        youWillLearn: [
          "Menggabungkan loop dan kondisional untuk output tabel dan pola",
          "Menyelesaikan latihan logika klasik (FizzBuzz, intro bilangan prima)",
          "Melacak logika bersarang di kertas sebelum coding",
          "Menulis fungsi yang merangkum pola loop berulang",
        ],
      },
    ],
  },
  {
    title: "Fase 3 — Struktur Data",
    sessions: [
      {
        number: "7",
        title: "List & Tuple",
        topics: "Indexing, slicing, mutability, tuple",
        youWillLearn: [
          "Membuat, memotong, dan memodifikasi list dengan metode umum",
          "Memahami kapan tuple lebih tepat daripada list",
          "Mengurutkan dan mencari list dengan sorted(), in, dan index()",
          "Memproses list catatan dalam program data kecil",
        ],
      },
      {
        number: "8",
        title: "Dictionary",
        topics: "Pasangan key-value, metode dict, nesting",
        youWillLearn: [
          "Menyimpan dan mengambil data dengan key dictionary",
          "Melakukan loop pada key, value, dan item dengan .items()",
          "Menyusun dictionary dan list bersarang untuk data terstruktur",
          "Membangun tabel lookup atau buku kontak sederhana",
        ],
      },
      {
        number: "9",
        title: "Set & Memilih Struktur",
        topics: "Set, keunikan, memilih koleksi yang tepat",
        youWillLearn: [
          "Menggunakan set untuk menghapus duplikat dan menguji keanggotaan",
          "Membandingkan list, tuple, dict, dan set untuk masalah tertentu",
          "Menggabungkan struktur dalam satu program (mis. list of dicts)",
          "Merefaktor penyimpanan data untuk kejelasan dan performa dasar",
        ],
      },
    ],
  },
  {
    title: "Fase 4 — Fungsi & Scope",
    sessions: [
      {
        number: "10",
        title: "Mendefinisikan Fungsi",
        topics: "def, parameter, return, docstring",
        youWillLearn: [
          "Menulis fungsi dengan parameter wajib dan opsional",
          "Mengembalikan banyak hasil dan menggunakan return early untuk kejelasan",
          "Mendokumentasikan fungsi dengan docstring singkat",
          "Memecah skrip monolitik menjadi fungsi bernama",
        ],
      },
      {
        number: "11",
        title: "Scope & Default",
        topics: "Scope lokal vs global, argumen default",
        youWillLearn: [
          "Memprediksi variabel mana yang terlihat di dalam fungsi",
          "Menghindari mutasi global tidak sengaja saat refactoring",
          "Menggunakan nilai parameter default dengan tepat",
          "Debug NameError dan UnboundLocalError terkait scope",
        ],
      },
      {
        number: "12",
        title: "Lambda & Pola Fungsional",
        topics: "Dasar lambda, intro map/filter, comprehension",
        youWillLearn: [
          "Menulis fungsi lambda singkat untuk transformasi sederhana",
          "Menggunakan list comprehension untuk membangun list secara ringkas",
          "Menerapkan map() dan filter() pada dataset kecil",
          "Memilih loop yang mudah dibaca vs comprehension untuk kejelasan",
        ],
      },
    ],
  },
  {
    title: "Fase 5 — Dasar OOP",
    sessions: [
      {
        number: "13",
        title: "Kelas & Objek",
        topics: "class, atribut, method, instance",
        youWillLearn: [
          "Mendefinisikan kelas dan membuat instance dengan atribut",
          "Menambahkan method yang beroperasi pada data instance",
          "Memodelkan entitas dunia nyata (mis. Siswa, Buku) sebagai kelas",
          "Membandingkan struktur prosedural vs berorientasi objek",
        ],
      },
      {
        number: "14",
        title: "__init__ & Perilaku Instance",
        topics: "__init__, self, dasar enkapsulasi",
        youWillLearn: [
          "Menginisialisasi state objek di __init__ dengan parameter",
          "Menggunakan self secara konsisten di method dan konstruktor",
          "Memvalidasi input saat membuat instance baru",
          "Membangun hierarki kelas kecil untuk game atau katalog",
        ],
      },
      {
        number: "15",
        title: "OOP dalam Praktik",
        topics: "Beberapa kelas, kolaborasi, sketsa desain",
        youWillLearn: [
          "Mendesain dua atau lebih kelas yang bekerja bersama",
          "Meneruskan objek antar method alih-alih variabel longgar",
          "Mensketsa relasi kelas sebelum coding",
          "Merefaktor kode prosedural menjadi kelas jika membantu",
        ],
      },
    ],
  },
  {
    title: "Fase 6 — File I/O & Modul",
    sessions: [
      {
        number: "16",
        title: "Membaca & Menulis File",
        topics: "open(), read/write, with statement, path",
        youWillLearn: [
          "Membaca file teks baris demi baris dan memproses konten",
          "Menulis output ke file menggunakan with open(...) as f",
          "Menangani file hilang dan error IO dasar",
          "Menyimpan data program antar eksekusi",
        ],
      },
      {
        number: "17",
        title: "Modul & Standard Library",
        topics: "import, from...import, json, intro datetime",
        youWillLearn: [
          "Mengorganisir kode di beberapa file .py dengan import",
          "Menggunakan json untuk memuat dan menyimpan data terstruktur",
          "Mengimpor modul standard library (datetime, random, os)",
          "Menyusun folder proyek multi-file kecil",
        ],
      },
      {
        number: "18",
        title: "Dasar Git",
        topics: "git init, commit, status, workflow sederhana",
        youWillLearn: [
          "Menginisialisasi repo dan membuat commit dengan pesan jelas",
          "Memeriksa status dan diff sebelum commit",
          "Menghubungkan repo lokal ke GitHub dan push",
          "Menggunakan .gitignore untuk proyek Python",
        ],
      },
    ],
  },
  {
    title: "Fase 7 — Proyek Capstone",
    sessions: [
      {
        number: "19",
        title: "Pembangunan Capstone",
        topics: "Scoping proyek, implementasi, draft README",
        youWillLearn: [
          "Mendefinisikan proyek pilihan siswa dengan milestone jelas",
          "Menerapkan OOP, file, dan modul dalam satu program kohesif",
          "Menulis README dengan langkah setup dan daftar fitur",
          "Beriterasi dari umpan balik instruktur di tengah pembangunan",
        ],
        deliverable: "Proyek capstone dengan draft README",
      },
      {
        number: "20",
        title: "Demo Day",
        topics: "Presentasi, code review, refleksi",
        youWillLearn: [
          "Mendemo proyek Python lengkap dengan run-through live",
          "Menjelaskan arsitektur: kelas, file, dan alur utama",
          "Menerima umpan balik peer dan instruktur tentang kualitas kode",
          "Merefleksikan skill yang diperoleh dan langkah berikutnya menuju Builder",
        ],
        deliverable: "Presentasi Demo Day capstone",
      },
    ],
  },
];
