export function buildWhatsAppUrl(phone: string, message: string) {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export type EnrollmentFormPayload = {
  locale: "id" | "en";
  contactName: string;
  studentName: string;
  studentAgeGrade: string;
  phone: string;
  programName: string;
  partySize: 1 | 2 | 3;
  estimatedShare: string;
  preferredSchedule: string;
  notes: string;
};

export function buildEnrollmentMessage(data: EnrollmentFormPayload): string {
  const isId = data.locale === "id";
  const partyLabel =
    data.partySize === 1
      ? isId
        ? "1 siswa (bayar penuh)"
        : "1 student (full class fee)"
      : isId
        ? `${data.partySize} siswa (bagi biaya kelas)`
        : `${data.partySize} students (split class fee)`;

  const lines = isId
    ? [
        "Halo Trixync Education!",
        "",
        "Saya ingin mendaftar program coding:",
        "",
        `• Orang tua / kontak: ${data.contactName}`,
        `• Nama siswa: ${data.studentName}`,
        `• Usia / kelas: ${data.studentAgeGrade || "-"}`,
        `• WhatsApp: ${data.phone}`,
        `• Program: ${data.programName}`,
        `• Ukuran kelas: ${partyLabel}`,
        `• Estimasi per orang: ${data.estimatedShare}`,
        `• Jadwal yang diinginkan: ${data.preferredSchedule || "-"}`,
        `• Catatan: ${data.notes || "-"}`,
        "",
        "Mohon info ketersediaan kelas dan langkah selanjutnya. Terima kasih!",
      ]
    : [
        "Hi Trixync Education!",
        "",
        "I'd like to enroll in a coding program:",
        "",
        `• Parent / contact: ${data.contactName}`,
        `• Student name: ${data.studentName}`,
        `• Age / grade: ${data.studentAgeGrade || "-"}`,
        `• WhatsApp: ${data.phone}`,
        `• Program: ${data.programName}`,
        `• Class size: ${partyLabel}`,
        `• Estimated per person: ${data.estimatedShare}`,
        `• Preferred schedule: ${data.preferredSchedule || "-"}`,
        `• Notes: ${data.notes || "-"}`,
        "",
        "Please share class availability and next steps. Thank you!",
      ];

  return lines.join("\n");
}

export type TutorApplyFormPayload = {
  locale: "id" | "en";
  fullName: string;
  phone: string;
  email: string;
  city: string;
  linkedIn: string;
  github: string;
  portfolio: string;
  yearsExperience: string;
  currentRole: string;
  industryBackground: string;
  programs: string[];
  teachingApproach: string;
  availability: string;
  resumeFileName: string;
};

export function buildTutorApplyMessage(data: TutorApplyFormPayload): string {
  const isId = data.locale === "id";
  const programs =
    data.programs.length > 0 ? data.programs.join(", ") : isId ? "-" : "-";

  const lines = isId
    ? [
        "Halo Trixync Education!",
        "",
        "Saya ingin apply sebagai freelance tutor.",
        "",
        `• Nama: ${data.fullName}`,
        `• WhatsApp: ${data.phone}`,
        `• Email: ${data.email}`,
        `• Kota: ${data.city || "-"}`,
        `• LinkedIn: ${data.linkedIn || "-"}`,
        `• GitHub: ${data.github || "-"}`,
        `• Portfolio: ${data.portfolio || "-"}`,
        `• Pengalaman industri: ${data.yearsExperience || "-"}`,
        `• Peran / pekerjaan saat ini: ${data.currentRole || "-"}`,
        `• Latar belakang industri: ${data.industryBackground || "-"}`,
        `• Program yang bisa diajar: ${programs}`,
        `• Pendekatan mengajar: ${data.teachingApproach || "-"}`,
        `• Ketersediaan: ${data.availability || "-"}`,
        `• Resume / CV: ${data.resumeFileName}`,
        "",
        "Saya paham posisi ini freelance dan akan ada proses wawancara.",
        "File resume akan saya kirim sebagai lampiran di chat ini.",
        "",
        "Mohon info langkah selanjutnya. Terima kasih!",
      ]
    : [
        "Hi Trixync Education!",
        "",
        "I'd like to apply as a freelance tutor.",
        "",
        `• Name: ${data.fullName}`,
        `• WhatsApp: ${data.phone}`,
        `• Email: ${data.email}`,
        `• City: ${data.city || "-"}`,
        `• LinkedIn: ${data.linkedIn || "-"}`,
        `• GitHub: ${data.github || "-"}`,
        `• Portfolio: ${data.portfolio || "-"}`,
        `• Industry experience: ${data.yearsExperience || "-"}`,
        `• Current role: ${data.currentRole || "-"}`,
        `• Industry background: ${data.industryBackground || "-"}`,
        `• Programs I can teach: ${programs}`,
        `• Teaching approach: ${data.teachingApproach || "-"}`,
        `• Availability: ${data.availability || "-"}`,
        `• Resume / CV: ${data.resumeFileName}`,
        "",
        "I understand this is a freelance role with an interview process.",
        "I will attach my resume file in this chat.",
        "",
        "Please share next steps. Thank you!",
      ];

  return lines.join("\n");
}

export type CollaborationFormPayload = {
  locale: "id" | "en";
  organization: string;
  contactName: string;
  phone: string;
  email: string;
  city: string;
  collaborationType: string;
  notes: string;
};

export function buildCollaborationMessage(data: CollaborationFormPayload): string {
  const isId = data.locale === "id";

  const lines = isId
    ? [
        "Halo Trixync Education!",
        "",
        "Saya ingin mengajukan kolaborasi:",
        "",
        `• Organisasi / institusi: ${data.organization}`,
        `• Nama kontak: ${data.contactName}`,
        `• WhatsApp: ${data.phone}`,
        `• Email: ${data.email || "-"}`,
        `• Kota: ${data.city || "-"}`,
        `• Jenis kolaborasi: ${data.collaborationType}`,
        `• Detail: ${data.notes || "-"}`,
        "",
        "Mohon info ketersediaan dan langkah selanjutnya. Terima kasih!",
      ]
    : [
        "Hi Trixync Education!",
        "",
        "I'd like to propose a collaboration:",
        "",
        `• Organization / institution: ${data.organization}`,
        `• Contact name: ${data.contactName}`,
        `• WhatsApp: ${data.phone}`,
        `• Email: ${data.email || "-"}`,
        `• City: ${data.city || "-"}`,
        `• Collaboration type: ${data.collaborationType}`,
        `• Details: ${data.notes || "-"}`,
        "",
        "Please share availability and next steps. Thank you!",
      ];

  return lines.join("\n");
}

