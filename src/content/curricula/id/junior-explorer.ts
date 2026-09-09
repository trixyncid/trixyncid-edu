import type { CurriculumBlock } from "../types";

export const curriculum: CurriculumBlock[] = [
  {
    title: "Fase 1 — Hello, Computer!",
    sessions: [
      {
        number: "1",
        title: "Program Python Pertama Anda",
        topics: "Setup Replit, print(), menjalankan kode",
        youWillLearn: [
          "Membuka proyek Replit dan menjalankan Python di browser",
          "Menggunakan print() untuk menampilkan teks dan angka di layar",
          "Memperbaiki error sintaks sederhana dari pesan error",
          "Menyimpan dan menjalankan ulang program setelah perubahan",
        ],
      },
      {
        number: "2",
        title: "Variabel & Tipe Dasar",
        topics: "Variabel, string, integer, matematika sederhana",
        youWillLearn: [
          "Membuat variabel untuk menyimpan nama, angka, dan teks",
          "Menggabungkan string dengan + dan mengulangnya dengan *",
          "Melakukan operasi aritmatika dengan +, -, *, dan /",
          "Memilih nama variabel yang jelas dan deskriptif",
        ],
      },
      {
        number: "3",
        title: "Input & Keputusan",
        topics: "input(), if/else, operator perbandingan",
        youWillLearn: [
          "Membaca input pengguna dengan input() dan menyimpannya di variabel",
          "Membandingkan nilai dengan ==, !=, <, dan >",
          "Mengarahkan alur program dengan if, elif, dan else",
          "Membangun program interaktif kecil yang merespons input",
        ],
      },
    ],
  },
  {
    title: "Fase 2 — Loop & Logika",
    sessions: [
      {
        number: "4",
        title: "For Loop",
        topics: "for loop, range(), iterasi urutan",
        youWillLearn: [
          "Mengulang aksi dengan for loop pada rentang angka",
          "Menggunakan range() untuk mengontrol berapa kali loop berjalan",
          "Melakukan loop pada string dan list karakter demi karakter",
          "Menggabungkan loop dengan print() untuk menggambar pola sederhana",
        ],
      },
      {
        number: "5",
        title: "While Loop & Break",
        topics: "while loop, break, kondisi loop",
        youWillLearn: [
          "Menjalankan kode berulang dengan while loop dan kondisi",
          "Menghentikan loop lebih awal dengan break saat tujuan tercapai",
          "Menghindari infinite loop dengan memperbarui kondisi setiap iterasi",
          "Membangun game tebak angka yang terus bertanya sampai benar",
        ],
      },
      {
        number: "6",
        title: "FizzBuzz & Latihan Logika",
        topics: "Kondisi gabungan, modulo, FizzBuzz klasik",
        youWillLearn: [
          "Menggunakan operator modulo (%) untuk menguji kelipatan",
          "Menggabungkan if/elif dengan loop untuk program multi-aturan",
          "Menyelesaikan masalah FizzBuzz langkah demi langkah",
          "Membaca kode loop orang lain dan menjelaskan apa yang dilakukannya",
        ],
      },
    ],
  },
  {
    title: "Fase 3 — Mengatur Data",
    sessions: [
      {
        number: "7",
        title: "List",
        topics: "Membuat list, indexing, append, len()",
        youWillLearn: [
          "Menyimpan banyak nilai dalam list dan mengakses item berdasarkan index",
          "Menambah item dengan append() dan mencari panjang list dengan len()",
          "Melakukan loop pada list untuk memproses setiap elemen",
          "Membangun program to-do atau daftar skor sederhana",
        ],
      },
      {
        number: "8",
        title: "Fungsi",
        topics: "def, parameter, memanggil fungsi",
        youWillLearn: [
          "Mendefinisikan blok kode yang bisa dipakai ulang dengan def dan nama",
          "Meneruskan nilai ke fungsi melalui parameter",
          "Memanggil fungsi dari kode utama dan dari dalam loop",
          "Memecah program panjang menjadi fungsi-fungsi kecil yang mudah dibaca",
        ],
      },
      {
        number: "9",
        title: "Return Value",
        topics: "return, menggunakan output fungsi, komposisi",
        youWillLearn: [
          "Mengembalikan hasil dari fungsi dengan return",
          "Menyimpan nilai return fungsi ke dalam variabel",
          "Merangkai fungsi kecil untuk menyelesaikan masalah lebih besar",
          "Merefaktor kode berulang menjadi satu fungsi dengan return",
        ],
      },
    ],
  },
  {
    title: "Fase 4 — Proyek Seru",
    sessions: [
      {
        number: "10",
        title: "Mad Libs",
        topics: "Template string, pengumpulan input, output cerita",
        youWillLearn: [
          "Mengumpulkan beberapa kata dari pengguna dengan input()",
          "Memasukkan kata pengguna ke template cerita dengan f-string atau +",
          "Mengatur prompt dan jawaban dalam list atau variabel",
          "Menyelesaikan dan membagikan cerita Mad Libs yang bisa dimainkan",
        ],
      },
      {
        number: "11",
        title: "Game Kuis",
        topics: "Pertanyaan, skor, loop, kondisi",
        youWillLearn: [
          "Menyimpan pertanyaan kuis dan jawaban benar dalam list",
          "Melacak skor berjalan saat pemain menjawab",
          "Memberi umpan balik untuk jawaban benar dan salah",
          "Melakukan loop semua pertanyaan sampai kuis selesai",
        ],
      },
      {
        number: "12",
        title: "Rock Paper Scissors",
        topics: "Pilihan acak, game loop, logika menang",
        youWillLearn: [
          "Mengimpor random dan memilih langkah komputer",
          "Membandingkan pilihan pemain dan komputer dengan if/elif",
          "Menjalankan beberapa ronde dalam loop sampai pemain berhenti",
          "Menampilkan pemenang setiap ronde dan hasil akhir",
        ],
      },
      {
        number: "13",
        title: "Gambar Turtle",
        topics: "Modul turtle, gerakan, bentuk, warna",
        youWillLearn: [
          "Menggerakkan turtle dengan forward(), backward(), left(), dan right()",
          "Mengubah warna pena dan menggambar bentuk serta pola sederhana",
          "Menggunakan loop untuk mengulang langkah menggambar bintang atau spiral",
          "Membuat gambar orisinal untuk ditunjukkan di kelas",
        ],
      },
    ],
  },
  {
    title: "Fase 5 — Showcase",
    sessions: [
      {
        number: "14",
        title: "Dasar Debugging",
        topics: "Pesan error, print debugging, memperbaiki bug",
        youWillLearn: [
          "Membaca pesan error Python dan menemukan baris yang gagal",
          "Menggunakan print() untuk memeriksa nilai variabel saat debugging",
          "Memperbaiki kesalahan umum: typo, indentasi salah, off-by-one",
          "Berlatih memperbaiki program rusak dengan bimbingan instruktur",
        ],
      },
      {
        number: "15",
        title: "Workshop Proyek Akhir",
        topics: "Perencanaan proyek, membangun, polish",
        youWillLearn: [
          "Memilih topik mini proyek dan membuat daftar fitur yang harus ada",
          "Membangun fitur inti menggunakan variabel, loop, dan fungsi",
          "Menguji proyek dan memperbaiki bug sebelum Demo Day",
          "Menulis penjelasan singkat tentang cara program bekerja",
        ],
        deliverable: "Mini proyek yang berjalan siap dipresentasikan",
      },
      {
        number: "16",
        title: "Demo Day",
        topics: "Presentasi, walkthrough kode, perayaan",
        youWillLearn: [
          "Mempresentasikan proyek ke kelas dalam beberapa menit",
          "Menjelaskan bagian kode penting di layar",
          "Menjawab pertanyaan sederhana tentang cara program bekerja",
          "Merayakan pekerjaan selesai dan melihat langkah berikutnya dalam coding",
        ],
        deliverable: "Presentasi Demo Day live",
      },
    ],
  },
];
