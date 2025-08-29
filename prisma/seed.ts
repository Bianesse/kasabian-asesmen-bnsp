import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mockActivities = [
  {
    title: "Penerimaan Siswa Baru 2025",
    date: "2025-07-18T00:00:00.000Z",
    location: "Lapangan SMKN 2 Cimahi",
    description:
      "SMK Negeri 2 Cimahi mengadakan kegiatan Masa Pengenalan Lingkungan Sekolah (MPLS) dengan semangat 'Citta Pradipa'",
    image:
      "https://smkn2cmi.sch.id/wp-content/uploads/2025/07/mpls-Original-Size-600x350.webp",
  },
  {
    title: "Lomba 17 Agustus",
    date: "2025-08-17T00:00:00.000Z",
    location: "Lapangan SMKN 2 Cimahi",
    description:
      "Dalam rangka memperingati HUT RI, siswa SMKN 2 Cimahi melaksanakan kegiatan lomba",
    image:
      "https://smkn2cmi.sch.id/wp-content/uploads/2023/07/mpls22-snapy-min-768x432.webp",
  },
  {
    title: "Edu Fair 2025",
    date: "2025-05-17T00:00:00.000Z",
    location: "SMKN 1 Cimahi",
    description:
      "SMK Negeri 2 Cimahi berpartisipasi dalam gelaran Edu Fair yang diselenggarakan di SMK Negeri 1 Cimahi.",
    image:
      "https://smkn2cmi.sch.id/wp-content/uploads/2025/07/Picture1-600x403.jpg",
  },
  {
    title: 'Donor Darah - “One Drop One Hope”',
    date: "2025-05-09T00:00:00.000Z",
    location: "Lab Mesin",
    description:
      "Kami mengajak siswa untuk berpartisipasi dalam kegiatan donor darah guna membantu sesama.",
    image:
      "https://smkn2cmi.sch.id/wp-content/uploads/2025/05/donor-darah-2025-600x403.webp",
  },
];

const mockNews = [
  {
    title:
      "SMKN 2 Cimahi Ramaikan Aksi Pelajar Segar Bareng Radio Dahlia dan SDC-1000",
    category: "Kegiatan",
    description:
      "SMKN 2 Cimahi menjadi lokasi pelaksanaan kegiatan 'SCHOOL TO SCHOOL – Aksi Pelajar Segar'. Sebuah acara edukatif...",
    author: "TIM Penulis",
    date: "2025-07-31T00:00:00.000Z",
    image:
      "https://smkn2cmi.sch.id/wp-content/uploads/2025/08/20-Original-Size-600x350.webp",
  },
  {
    title:
      "MPLS SMK Negeri 2 Cimahi 2025: Menyambut Siswa Baru dengan Semangat 'Citta Pradipa'",
    category: "Kegiatan",
    description:
      "SMK Negeri 2 Cimahi mengadakan kegiatan Masa Pengenalan Lingkungan Sekolah (MPLS)...",
    author: "TIM Penulis",
    date: "2025-07-18T00:00:00.000Z",
    image:
      "https://smkn2cmi.sch.id/wp-content/uploads/2025/07/mpls-Original-Size-600x350.webp",
  },
  {
    title:
      "SMKN 2 Cimahi Selenggarakan IHT Kurikulum 2025/2026: Wujudkan Pembelajaran Mendalam dan Relevan",
    category: "Kegiatan",
    description:
      "Kegiatan ini diikuti oleh seluruh guru untuk meningkatkan kompetensi...",
    author: "TIM Penulis",
    date: "2025-07-15T00:00:00.000Z",
    image:
      "https://smkn2cmi.sch.id/wp-content/uploads/2025/07/Web-SMKN-2-Cimahi-Original-Size-600x350.webp",
  },
  {
    title: "SMKN 2 Cimahi Tampilkan Inovasi Unggulan di Edu Fair 2025",
    description:
      "Pada 20-25 Mei 2025 SMKN 2 Cimahi berpartisipasi dalam gelaran Edu Fair yang diselenggarakan di SMK Negeri 1 Cimahi. Kegiatan berlangsung selama dua hari, Sabtu dan Minggu...",
    date: "2025-05-20T00:00:00.000Z",
    category: "Kegiatan",
    author: "Tim Penulis",
    image:
      "https://smkn2cmi.sch.id/wp-content/uploads/2025/07/Picture1-600x403.jpg",
  },
  {
    title: "INFO KEGIATAN SEKOLAH Periode 2 - 9 Mei 2025",
    description:
      "Kegiatan Sekolah Pekan Ini di SMK Negeri 2 Cimahi berfokus pada rutinitas belajar siswa/i. Setiap hari, kami terus berusaha meningkatkan sistem pembelajaran dengan mendukung kegiatan siswa seperti simulasi ujian dan persiapan kelas XII...",
    date: "2025-05-16T00:00:00.000Z",
    category: "Kegiatan",
    author: "Kang Admin",
    image:
      "https://smkn2cmi.sch.id/wp-content/uploads/2025/05/donor-darah-2025-600x403.webp",
  },
  {
    title: "Gebyar Pengambilan Ijazah 2024",
    description:
      "Pengumuman Gebyar Pengambilan Ijazah 2024 gratis! Kabar gembira untuk alumni SMKN 2 Cimahi, hadir pada acara yang berlangsung di SMKN 2 Cimahi mulai 27 Agustus 2024...",
    date: "2024-08-19T00:00:00.000Z",
    category: "Info Pengumuman",
    author: "Kang Admin",
    image:
      "https://smkn2cmi.sch.id/wp-content/uploads/2024/08/Ijazahp1-768x543.webp",
  },
];

async function main() {
  try {
    await prisma.activity.createMany({ data: mockActivities });
    await prisma.news.createMany({ data: mockNews });
    console.log("✅ Seed completed!");
  } catch (e) {
    console.error("❌ Seed failed:", e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
