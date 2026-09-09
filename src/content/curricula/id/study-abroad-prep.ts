import type { CurriculumBlock } from "../types";

/**
 * Persiapan Study Abroad — kolaborasi Yanks and Brits (Medan).
 * Python Fundamentals I & II bergaya foundation-year / CS intro luar negeri —
 * sengaja berbeda dari Explorer (Tier 2) dan Builder Python Core (Tier 3).
 */
export const curriculum: CurriculumBlock[] = [
  {
    title: "Modul 1 — Python Fundamentals I",
    note: "Jalur foundation-year / CS intro luar negeri. Brief formal, lab note berbahasa Inggris, dan kebiasaan assessment — bukan silabus Explorer Trixync (Tier 2).",
    sessions: [
      {
        number: "1",
        title: "Berpikir seperti mahasiswa CS di luar negeri",
        topics: "Problem brief, pseudocode, integritas akademik, lab note Inggris",
        youWillLearn: [
          "Membaca problem brief berbahasa Inggris dan menyatakan constraint sebelum coding",
          "Menyusun algoritma dalam pseudocode seperti yang diharapkan penilai foundation-year",
          "Memisahkan eksplorasi dari submission final (draft vs karya dinilai)",
          "Menulis lab note singkat berbahasa Inggris tentang pendekatan dan asumsi",
        ],
      },
      {
        number: "2",
        title: "Berpikir bertipe & ekspresi",
        topics: "Tipe sebagai kontrak, operator, urutan evaluasi, presisi",
        youWillLearn: [
          "Memperlakukan tipe sebagai kontrak antar bagian program",
          "Menelusuri urutan evaluasi ekspresi di kertas sebelum menjalankan kode",
          "Menjelaskan batas presisi float dalam justifikasi tertulis singkat",
          "Merancang input/output tugas berbobot dengan satuan yang jelas",
        ],
      },
      {
        number: "3",
        title: "Control flow berbasis spesifikasi",
        topics: "Decision table, edge case, pengecekan bergaya assert",
        youWillLearn: [
          "Membangun decision table dari spesifikasi tertulis",
          "Mengimplementasikan cabang yang menutupi edge case wajib dari rubrik",
          "Menggunakan assert sederhana untuk mengunci perilaku sebelum submit",
          "Mempertahankan alasan tiap cabang dalam check-in lisan berbahasa Inggris",
        ],
      },
      {
        number: "4",
        title: "Iterasi sebagai desain algoritma",
        topics: "Pengantar loop invariant, intuisi kompleksitas, tracing",
        youWillLearn: [
          "Menyatakan apa yang tetap benar di tiap putaran loop (pengantar invariant)",
          "Membandingkan loop menghitung vs mencari untuk brief yang sama",
          "Memperkirakan langkah kasar untuk n kecil saat menjelaskan efisiensi",
          "Membuat tabel dry-run sebagai lampiran lab",
        ],
      },
      {
        number: "5",
        title: "Prosedur, kontrak & docstring",
        topics: "Precondition/postcondition, helper murni, docstring Inggris",
        youWillLearn: [
          "Menulis kontrak fungsi: input, output, dan kasus gagal",
          "Mengutamakan return value daripada helper yang hanya print untuk karya dinilai",
          "Menulis docstring Inggris bergaya Google/NumPy untuk penilai",
          "Mengomposisi helper kecil menjadi solusi yang sesuai brief",
        ],
      },
      {
        number: "6",
        title: "Sequence untuk soal terstruktur",
        topics: "List/tuple sebagai model data, rencana indexing, slicing",
        youWillLearn: [
          "Memodelkan entitas tugas sebagai list atau tuple field",
          "Merencanakan rentang index sebelum coding agar tidak kehilangan nilai off-by-one",
          "Memilih struktur mutable vs immutable dengan rasional tertulis",
          "Mentransformasi sequence sambil menjaga data assessment asli",
        ],
      },
      {
        number: "7",
        title: "Teks, parsing & higiene submission",
        topics: "Normalisasi input, brief berbasis file, run yang reproducible",
        youWillLearn: [
          "Mem-parsing file input berformat Inggris seperti di lab foundation",
          "Menormalisasi whitespace/case agar automated check tetap stabil",
          "Mengemas skrip run yang reproducible untuk penilai",
          "Mencantumkan asumsi dan batasan di lampiran berbahasa Inggris",
        ],
      },
      {
        number: "8",
        title: "Lab dinilai — Fundamentals I",
        topics: "Brief bergaya timed, pemetaan rubrik, walkthrough viva-lite",
        youWillLearn: [
          "Memetakan tiap baris rubrik ke kode dan bukti di write-up",
          "Mengumpulkan zip/folder sesuai aturan lab luar negeri",
          "Memberikan walkthrough Inggris 3 menit tentang pilihan desain",
          "Merefleksikan revisi sebelum resit atau percobaan kedua",
        ],
        deliverable: "Paket lab Python I bergaya dinilai (kode + laporan lab Inggris)",
      },
    ],
  },
  {
    title: "Modul 2 — Python Fundamentals II",
    note: "Jembatan menuju assessment CS luar negeri: abstraksi, literasi testing, data terstruktur — bukan Builder Python Core Trixync (spesialisasi venv/decorator/path).",
    sessions: [
      {
        number: "9",
        title: "Data asosiatif & pemodelan masalah",
        topics: "Dictionary/set sebagai model, desain key, brief agregasi",
        youWillLearn: [
          "Memodelkan record dan lookup dari case study brief berbahasa Inggris",
          "Merancang key dictionary yang selaras dengan cara penilai merumuskan soal",
          "Mengagregasi count/sum tanpa mengubah data assessment sumber",
          "Menjelaskan trade-off vs list saat menjawab prompt teori singkat",
        ],
      },
      {
        number: "10",
        title: "Abstraksi & idiom yang terbaca",
        topics: "Ekstraksi helper, comprehension dengan restraint, penamaan untuk penilai",
        youWillLearn: [
          "Mengekstrak helper bila rubrik menghargai kejelasan lebih dari kecerdikan",
          "Memakai comprehension hanya jika meningkatkan keterbacaan bagi penilai",
          "Menamai identifier agar mencerminkan kosakata di problem statement",
          "Merefactor solusi berantakan menjadi struktur yang bisa dinilai",
        ],
      },
      {
        number: "11",
        title: "Layout coursework multi-file",
        topics: "Modul sebagai unit submission, import, higiene package",
        youWillLearn: [
          "Memecah coursework ke modul yang bisa dibuka penilai secara mandiri",
          "Menghindari circular import yang merusak harness tes otomatis",
          "Mendokumentasikan urutan run berbahasa Inggris untuk asisten pengajar",
          "Menjaga entrypoint tingkat atas yang bersih untuk skrip penilaian",
        ],
      },
      {
        number: "12",
        title: "Literasi testing untuk assessment",
        topics: "Tes berbasis contoh, tabel edge, pesan kegagalan",
        youWillLearn: [
          "Membangun tabel edge-case dari spesifikasi tertulis",
          "Menulis tes berbasis contoh yang meniru smoke-test TA",
          "Menghasilkan pesan gagal yang membantu debug di bawah tekanan waktu",
          "Memahami secara konseptual pemisahan tes siswa vs hidden test",
        ],
      },
      {
        number: "13",
        title: "Object untuk domain brief",
        topics: "Class sebagai bahasa domain, diagram state, API method",
        youWillLearn: [
          "Menerjemahkan kata benda/kerja di brief menjadi class dan method",
          "Menggambar diagram state sederhana sebelum mengimplementasikan perilaku",
          "Menjaga API method publik cukup kecil untuk dijelaskan di viva",
          "Menghindari global bergaya skrip bila rubrik mengharapkan object",
        ],
      },
      {
        number: "14",
        title: "Komposisi di atas inheritance yang rumit",
        topics: "Pemodelan has-a, hierarki dangkal, tulisan trade-off akademik",
        youWillLearn: [
          "Mengutamakan komposisi saat memodelkan domain coursework",
          "Memakai inheritance hanya bila brief secara eksplisit menghargainya",
          "Menulis paragraf trade-off singkat berbahasa Inggris untuk desain Anda",
          "Menyelaraskan diagram class dan kode untuk paket submission",
        ],
      },
      {
        number: "15",
        title: "Pipeline data coursework (stdlib)",
        topics: "Brief CSV/JSON, log validasi, skrip ramah audit",
        youWillLearn: [
          "Memuat dataset CSV/JSON yang dibingkai sebagai input tugas luar negeri",
          "Memvalidasi schema dan mencatat baris ditolak untuk jejak audit",
          "Menulis output bersih dengan nama file sesuai brief",
          "Menjelaskan keputusan cleaning berbahasa Inggris tanpa menyembunyikan langkah",
        ],
      },
      {
        number: "16",
        title: "Capstone dinilai — Fundamentals II",
        topics: "Brief OOP + data multi-modul, defence Inggris, rencana tahun satu",
        youWillLearn: [
          "Mengirim solusi multi-modul yang memenuhi rubrik komposit",
          "Menyertakan tes, sample run, dan design defence berbahasa Inggris",
          "Presentasi seolah ke tutor luar negeri (kejelasan di atas demo cepat)",
          "Menyusun rencana perbaikan pribadi untuk tahun pertama kuliah",
        ],
        deliverable: "Paket dinilai Python II (modul + tes + defence Inggris)",
      },
    ],
  },
  {
    title: "Modul 3 — Web Programming",
    note: "Fondasi browser-ke-server yang umum di program CS dan digital media luar negeri.",
    sessions: [
      {
        number: "17",
        title: "Dasar Arsitektur Web",
        topics: "HTTP, client/server, URL, status code",
        youWillLearn: [
          "Menjelaskan alur request/response dengan bahasa sederhana",
          "Membaca status code dan menemukan kegagalan di network tab",
          "Memetakan route dan resource untuk situs sederhana",
          "Menjelaskan kolaborasi front-end dan back-end",
        ],
      },
      {
        number: "18",
        title: "Struktur & Semantik HTML",
        topics: "Struktur dokumen, form, dasar aksesibilitas",
        youWillLearn: [
          "Membangun struktur halaman semantik dengan heading, list, dan section",
          "Membuat form yang mengumpulkan dan memvalidasi input dasar",
          "Menggunakan label dan alt text untuk markup yang ramah aksesibilitas",
          "Mengorganisasi aset dalam folder proyek yang rapi",
        ],
      },
      {
        number: "19",
        title: "Layout CSS & Desain Responsif",
        topics: "box model, flexbox/grid, layout mobile-first",
        youWillLearn: [
          "Menata halaman dengan tool layout modern (flexbox/grid)",
          "Membangun layout responsif untuk laptop dan ponsel",
          "Menerapkan spasi dan tipografi konsisten tanpa berantakan",
          "Men-debug masalah layout dengan developer tools browser",
        ],
      },
      {
        number: "20",
        title: "JavaScript di Browser",
        topics: "DOM, event, dasar fetch",
        youWillLearn: [
          "Memilih dan memperbarui elemen DOM berdasarkan event pengguna",
          "Menangani klik, form, dan validasi client-side sederhana",
          "Mengambil JSON dari API dan menampilkannya di halaman",
          "Menjaga modul JS tetap terbaca untuk tugas kelompok",
        ],
      },
      {
        number: "21",
        title: "Pola Proyek Front-end",
        topics: "Berpikir komponen, state di client, pengantar tooling",
        youWillLearn: [
          "Memecah UI menjadi section atau komponen yang bisa dipakai ulang",
          "Melacak state UI tanpa event handler yang berantakan",
          "Menggunakan starter modern (atau modul plain) dengan script yang jelas",
          "Menyiapkan demo front-end untuk portofolio atau admisi",
        ],
      },
      {
        number: "22",
        title: "Dasar Server & API",
        topics: "Ide REST, route, respons JSON, konsep auth",
        youWillLearn: [
          "Merancang endpoint bergaya REST sederhana untuk resource CRUD",
          "Mengembalikan JSON dengan pesan error dan status code yang jelas",
          "Memanggil API sendiri dari halaman front-end",
          "Menjelaskan cookie/token secara konseptual untuk konteks kuliah",
        ],
      },
      {
        number: "23",
        title: "Mini Aplikasi Full-stack",
        topics: "Hubungkan UI + API + sketsa persistensi",
        youWillLearn: [
          "Menghubungkan form UI untuk create/read data lewat API",
          "Menyimpan data dengan store ringan atau sketsa database",
          "Menangani state loading dan error di UI",
          "Mendeploy atau mendemo app agar bisa dibuka tutor/admisi",
        ],
      },
      {
        number: "24",
        title: "Capstone Web Programming",
        topics: "Polish, README, demo live, walkthrough Bahasa Inggris",
        youWillLearn: [
          "Mengirim proyek web full-stack kecil dari ujung ke ujung",
          "Mendokumentasikan setup, fitur, dan arsitektur dalam Bahasa Inggris",
          "Merekam atau mempresentasikan demo live singkat",
          "Merefleksikan apa yang akan diperbaiki untuk brief proyek universitas",
        ],
        deliverable: "Mini-app web + README Inggris + skrip demo",
      },
    ],
  },
  {
    title: "Modul 4 — Data Analytics and Engineering",
    note: "Pemikiran analitis dan pipeline data yang muncul di program STEM dan bisnis luar negeri.",
    sessions: [
      {
        number: "25",
        title: "Berpikir Data & Merumuskan Pertanyaan",
        topics: "metrik, hipotesis, mindset data tidy",
        youWillLearn: [
          "Mengubah topik samar menjadi pertanyaan yang bisa diukur",
          "Mengidentifikasi dimensi, metrik, dan grain dataset",
          "Membedakan data berantakan vs tidy sebelum analisis",
          "Menulis rencana analisis seperti yang diharapkan brief lab",
        ],
      },
      {
        number: "26",
        title: "Analisis Tabular dengan Python",
        topics: "dasar pandas, filter, groupby, join",
        youWillLearn: [
          "Memuat tabel dan memeriksa shape, dtype, serta missing value",
          "Memfilter, mengurutkan, dan mengagregasi dengan pola groupby",
          "Menggabungkan tabel pada key tanpa menduplikasi baris",
          "Menghasilkan tabel ringkasan siap untuk chart atau laporan",
        ],
      },
      {
        number: "27",
        title: "Visualisasi & Komunikasi",
        topics: "chart, storytelling, caption figure berbahasa Inggris",
        youWillLearn: [
          "Memilih jenis chart yang sesuai pertanyaan yang diajukan",
          "Membuat plot jelas dengan label, satuan, dan skala terbaca",
          "Menulis caption figure dan insight dalam Bahasa Inggris akademik",
          "Menghindari visual menyesatkan yang sering muncul di laporan lemah",
        ],
      },
      {
        number: "28",
        title: "Kualitas Data & Pipeline Cleaning",
        topics: "null, duplikat, validasi, notebook reproducible",
        youWillLearn: [
          "Mendeteksi dan menangani record hilang/duplikat secara sengaja",
          "Memvalidasi rentang dan kategori sebelum modeling atau pelaporan",
          "Menjaga langkah cleaning reproducible di notebook atau skrip",
          "Mencatat asumsi agar penilai bisa mengikuti proses Anda",
        ],
      },
      {
        number: "29",
        title: "Pengantar Konsep Data Engineering",
        topics: "ETL/ELT, batch vs stream (konseptual), lapisan storage",
        youWillLearn: [
          "Menjelaskan extract–transform–load secara praktis",
          "Memisahkan tanggung jawab data raw, cleaned, dan serving",
          "Menyusun sketsa pipeline sederhana dari file drop ke tabel dashboard",
          "Mendiskusikan trade-off pemrosesan batch untuk skala tugas kuliah",
        ],
      },
      {
        number: "30",
        title: "SQL untuk Analytics",
        topics: "SELECT, WHERE, JOIN, GROUP BY, ide window dasar",
        youWillLearn: [
          "Men-query tabel dengan filter, join, dan agregasi",
          "Menerjemahkan pertanyaan analisis menjadi langkah SQL",
          "Membandingkan hasil SQL dengan output pandas untuk keyakinan",
          "Menulis query yang terbaca untuk peer review",
        ],
      },
      {
        number: "31",
        title: "Mini Pipeline End-to-End",
        topics: "ingest → clean → analyze → present",
        youWillLearn: [
          "Membangun pipeline kecil dari file mentah ke tabel insight",
          "Mengotomatiskan langkah cleaning berulang bila berguna",
          "Menghasilkan chart dan memo temuan singkat berbahasa Inggris",
          "Mengemas notebook/skrip agar tutor bisa menjalankan ulang",
        ],
      },
      {
        number: "32",
        title: "Showcase Study Abroad",
        topics: "Paket portofolio, presentasi Inggris, rencana langkah lanjut",
        youWillLearn: [
          "Merakit artefak Python, web, dan data menjadi satu paket portofolio",
          "Mempresentasikan kesiapan study abroad dalam Bahasa Inggris yang jelas",
          "Memetakan modul mana yang mendukung jurusan tujuan di luar negeri",
          "Meninggalkan rencana konkret untuk aplikasi dan latihan lanjutan",
        ],
        deliverable: "Paket portofolio study abroad + presentasi showcase Inggris",
      },
    ],
  },
];
