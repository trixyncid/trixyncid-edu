import type { CurriculumBlock } from "../types";

export const curriculum: CurriculumBlock[] = [
  {
    title: "Fase 1 — Identitas Developer",
    sessions: [
      {
        number: "1",
        title: "Profil GitHub & Kebersihan Portofolio",
        topics: "README profil, pinned repos, contribution graph",
        youWillLearn: [
          "Menulis README profil yang menyatakan stack dan tujuan Anda",
          "Pin 2–4 repo yang paling merepresentasikan pekerjaan Anda",
          "Merapikan visibilitas riwayat commit dan deskripsi repo",
          "Menggunakan penamaan dan topik konsisten di repo publik",
        ],
      },
      {
        number: "2",
        title: "LinkedIn & Personal Branding",
        topics: "Headline, about, featured section, engagement komunitas",
        youWillLearn: [
          "Membuat headline dan about yang ditujukan untuk peran junior dev",
          "Menambahkan link featured ke proyek live dan GitHub",
          "Merencanakan apa yang diposting dan cara berinteraksi di komunitas tech lokal",
          "Menyelaraskan GitHub dan LinkedIn agar recruiter melihat cerita yang sama",
        ],
        deliverable: "Profil GitHub rapi dan profil LinkedIn aktif",
      },
    ],
  },
  {
    title: "Fase 2 — Sprint Proyek Portofolio",
    sessions: [
      {
        number: "3",
        title: "Pemilihan & Scoping Proyek",
        topics: "Pilih 1–2 proyek, syarat deploy, pilihan stack",
        youWillLearn: [
          "Memilih proyek FastAPI atau React/Next.js selaras dengan jalur Anda",
          "Mendefinisikan scope MVP dengan milestone yang bisa di-deploy",
          "Menyiapkan repo, skeleton README, dan daftar issue atau tugas",
          "Mengonfirmasi pilihan hosting: Railway, Render, atau Vercel",
        ],
      },
      {
        number: "4",
        title: "Build Sprint I",
        topics: "Fitur inti, code review instruktur",
        youWillLearn: [
          "Mengimplementasikan fitur inti dengan disiplin commit harian",
          "Meminta dan menerapkan umpan balik instruktur tentang struktur dan kejelasan",
          "Memperbarui README dengan langkah setup saat membangun",
          "Deploy versi awal meski belum lengkap",
        ],
      },
      {
        number: "5",
        title: "Build Sprint II & Polish",
        topics: "README, demo live, penjelasan stack",
        youWillLearn: [
          "Menyelesaikan fitur tersisa dan memperbaiki bug prioritas",
          "Menulis bagian README: overview, stack, setup, link demo live",
          "Merekam atau mendokumentasikan skrip demo singkat untuk interview",
          "Memastikan proyek dapat diakses publik dan stabil",
        ],
        deliverable: "1–2 proyek portofolio ter-deploy dengan README dan demo live",
      },
    ],
  },
  {
    title: "Fase 3 — Resume & Strategi Lamaran",
    sessions: [
      {
        number: "6",
        title: "Struktur Resume Tech",
        topics: "Yang harus disertakan, mengukur dampak, format satu halaman",
        youWillLearn: [
          "Menyusun bagian: ringkasan, skill, proyek, pendidikan, pengalaman",
          "Mengukur dampak jika memungkinkan (pengguna, kecepatan, scope)",
          "Memangkas isi tidak perlu dan menyelaraskan bullet dengan deskripsi kerja junior dev",
          "Menyesuaikan bullet proyek dengan teknologi yang dicari perusahaan",
        ],
      },
      {
        number: "7",
        title: "ATS & Formatting",
        topics: "Layout ramah ATS, kata kunci, export PDF",
        youWillLearn: [
          "Memformat resume yang ter-parse bersih di sistem ATS",
          "Mencerminkan kata kunci relevan dari lowongan target",
          "Menghindari tabel dan grafik yang merusak parsing otomatis",
          "Mengekspor PDF bersih dan memverifikasi keterbacaan di mobile",
        ],
      },
      {
        number: "8",
        title: "Job Board & Follow-up",
        topics: "Glints, Kalibrr, LinkedIn, JobStreet, Tech in Asia",
        youWillLearn: [
          "Mencari dan memfilter peran di platform kerja fokus Indonesia",
          "Melacak lamaran dalam spreadsheet atau tool sederhana",
          "Menulis catatan cover singkat yang disesuaikan jika platform mengizinkan",
          "Follow-up secara profesional setelah melamar atau interview",
        ],
        deliverable: "Resume tech satu halaman final",
      },
    ],
  },
  {
    title: "Fase 4 — Persiapan Interview",
    sessions: [
      {
        number: "9",
        title: "Pola Technical Interview",
        topics: "Array, string, hash map, rekursi dasar",
        youWillLearn: [
          "Menyelesaikan masalah fokus pada array dan string tanpa grind volume",
          "Menggunakan hash map untuk menukar ruang dengan waktu pada masalah lookup",
          "Melacak solusi rekursif sederhana dan mengidentifikasi base case",
          "Menjelaskan kompleksitas waktu dan ruang dalam bahasa sederhana",
        ],
      },
      {
        number: "10",
        title: "Mock Technical Interview",
        topics: "Live coding, ekspektasi take-home, latihan peer",
        youWillLearn: [
          "Berlatih berpikir keras sambil menulis kode di bawah tekanan waktu",
          "Menangani hint dan koreksi arah dari interviewer",
          "Mereview ekspektasi proyek take-home umum di pasar Indonesia",
          "Berpartisipasi dalam sesi mock peer dengan umpan balik terstruktur",
        ],
      },
      {
        number: "11",
        title: "Behavioral Interview",
        topics: "Metode STAR, Q&A bilingual, pertanyaan tech umum",
        youWillLearn: [
          "Menjawab pertanyaan behavioral dengan format STAR",
          "Mempersiapkan cerita untuk teamwork, konflik, dan belajar dari kegagalan",
          "Berlatih respons dalam Bahasa Indonesia dan Inggris",
          "Merekam mock interview dan merevisi jawaban lemah",
        ],
        deliverable: "Mock interview terekam yang direview dan diperbaiki",
      },
    ],
  },
  {
    title: "Fase 5 — Soft Skills untuk Tech",
    sessions: [
      {
        number: "12",
        title: "Komunikasi & Stakeholder",
        topics: "Menjelaskan tech ke audiens non-teknis",
        youWillLearn: [
          "Menjelaskan fitur atau bug tanpa jargon ke pendengar non-dev",
          "Menggunakan diagram atau analogi untuk arsitektur tingkat tinggi",
          "Menulis update status yang jelas untuk audiens campuran",
          "Berlatih active listening dalam diskusi lintas fungsi",
        ],
      },
      {
        number: "13",
        title: "Workflow Agile & Bahasa Inggris Tertulis",
        topics: "Standup, tiket, PR, Slack/email, dokumentasi",
        youWillLearn: [
          "Menjalankan standup ringkas: kemarin, hari ini, blocker",
          "Memecah pekerjaan menjadi tiket dan menghubungkan PR ke issue",
          "Menulis deskripsi PR dan commit message dalam Bahasa Inggris yang jelas",
          "Mengikuti etiket async di Slack dan email di tim remote",
        ],
      },
    ],
  },
  {
    title: "Fase 6 — Exposure Industri",
    sessions: [
      {
        number: "14",
        title: "Sesi Praktisi Tamu",
        topics: "Perspektif dev lokal Medan atau remote Indonesia",
        youWillLearn: [
          "Mendengar bagaimana praktisi merekrut dan mengembangkan junior dev lokal",
          "Bertanya tentang pekerjaan harian dan jalur karier",
          "Menghubungkan tema sesi ke portofolio dan resume Anda",
          "Mencatat saran actionable untuk pencarian kerja bulan ini",
        ],
      },
      {
        number: "15",
        title: "Code Review & Workflow Produksi",
        topics: "Review live, tiket → branch → PR → deploy",
        youWillLearn: [
          "Mengirim kode nyata untuk review live instruktur atau peer",
          "Menerapkan umpan balik review dengan commit follow-up fokus",
          "Menjelaskan alur tiket → branch → PR → CI → deploy pada repo contoh",
          "Mengidentifikasi quality gate yang harus diadopsi di proyek sendiri",
        ],
      },
    ],
  },
  {
    title: "Fase 7 — Demo Day + Kelulusan",
    sessions: [
      {
        number: "16",
        title: "Demo Day & Kelulusan",
        topics: "Presentasi portofolio, posting LinkedIn, alumni",
        youWillLearn: [
          "Mempresentasikan proyek portofolio 5–10 menit dengan demo live",
          "Mempublikasikan atau membuat draft posting LinkedIn tentang kelulusan dan proyek",
          "Bergabung jaringan alumni dan memahami sumber daya berkelanjutan",
        ],
        deliverable: "Presentasi Demo Day, posting LinkedIn",
      },
    ],
  },
];
