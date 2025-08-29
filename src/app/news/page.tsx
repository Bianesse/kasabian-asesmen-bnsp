const mockNews = [
    {
      id: 1,
      title: "SMKN 2 Cimahi Ramaikan Aksi Pelajar Segar Bareng Radio Dahlia dan SDC-1000",
      category: "Kegiatan",
      excerpt:
        "SMKN 2 Cimahi menjadi lokasi pelaksanaan kegiatan 'SCHOOL TO SCHOOL – Aksi Pelajar Segar'. Sebuah acara edukatif...",
      author: "TIM Penulis",
      date: "31 Juli 2025",
      image: "https://smkn2cmi.sch.id/wp-content/uploads/2025/08/20-Original-Size-600x350.webp",
    },
    {
      id: 2,
      title: "MPLS SMK Negeri 2 Cimahi 2025: Menyambut Siswa Baru dengan Semangat 'Citta Pradipa'",
      category: "Kegiatan",
      excerpt: "SMK Negeri 2 Cimahi mengadakan kegiatan Masa Pengenalan Lingkungan Sekolah (MPLS)...",
      author: "TIM Penulis",
      date: "18 Juli 2025",
      image: "https://smkn2cmi.sch.id/wp-content/uploads/2025/07/mpls-Original-Size-600x350.webp",
    },
    {
      id: 3,
      title: "SMKN 2 Cimahi Selenggarakan IHT Kurikulum 2025/2026: Wujudkan Pembelajaran Mendalam dan Relevan",
      category: "Kegiatan",
      excerpt: "Kegiatan ini diikuti oleh seluruh guru untuk meningkatkan kompetensi...",
      author: "TIM Penulis",
      date: "15 Juli 2025",
      image: "https://smkn2cmi.sch.id/wp-content/uploads/2025/07/Web-SMKN-2-Cimahi-Original-Size-600x350.webp",
    },
    {
      id: 4,
      title: "SMKN 2 Cimahi Tampilkan Inovasi Unggulan di Edu Fair 2025",
      excerpt:
        "Pada 20-25 Mei 2025 SMKN 2 Cimahi berpartisipasi dalam gelaran Edu Fair yang diselenggarakan di SMK Negeri 1 Cimahi. Kegiatan berlangsung selama dua hari, Sabtu dan Minggu...",
      date: "20 Mei 2025",
      category: "Kegiatan",
      author: "Tim Penulis",
      image: "https://smkn2cmi.sch.id/wp-content/uploads/2025/07/Picture1-600x403.jpg",
    },
    {
      id: 5,
      title: "INFO KEGIATAN SEKOLAH Periode 2 - 9 Mei 2025",
      excerpt:
        "Kegiatan Sekolah Pekan Ini di SMK Negeri 2 Cimahi berfokus pada rutinitas belajar siswa/i. Setiap hari, kami terus berusaha meningkatkan sistem pembelajaran dengan mendukung kegiatan siswa seperti simulasi ujian dan persiapan kelas XII...",
      date: "16 Mei 2025",
      category: "Kegiatan",
      author: "Kang Admin",
      image: "https://smkn2cmi.sch.id/wp-content/uploads/2025/05/donor-darah-2025-600x403.webp",
    },
    {
      id: 6,
      title: "Gebyar Pengambilan Ijazah 2024",
      excerpt:
        "Pengumuman Gebyar Pengambilan Ijazah 2024 gratis! Kabar gembira untuk alumni SMKN 2 Cimahi, hadir pada acara yang berlangsung di SMKN 2 Cimahi mulai 27 Agustus 2024...",
      date: "19 Agustus 2024",
      category: "Info Pengumuman",
      author: "Kang Admin",
      image: "https://smkn2cmi.sch.id/wp-content/uploads/2024/08/Ijazahp1-768x543.webp",
    },
  ];
  
  export default function NewsPage() {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 mt-20">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Berita</h1>
        <hr className="mb-8" />
  
        <div className="flex flex-col lg:flex-row gap-7">
          {/* MAIN CONTENT */}
          <div className="flex-1">
            <div className="columns-1 md:columns-2 lg:columns-3 md:gap-6">
              {mockNews.map((item) => (
                <article
                  key={item.id}
                  className="mb-6 break-inside-avoid rounded-xl bg-white shadow hover:shadow-lg transition overflow-hidden"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 md:h-64 lg:h-72 object-cover hover:scale-105 transition"
                  />
  
                  {/* Content */}
                  <div className="p-6">
                    <span className="text-sm text-amber-600 font-medium">{item.category}</span>
                    <h2 className="text-base md:text-lg font-semibold mt-2 mb-2 hover:text-amber-700 cursor-pointer">
                      {item.title}
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 mb-4">{item.excerpt}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <div className="w-8 h-8 rounded-full bg-gray-200 mr-2" />
                      <span>{item.author}</span>
                      <span className="mx-2">•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
  
          {/* SIDEBAR */}
          <aside className="w-full lg:w-80 xl:w-96 shrink-0 space-y-4 mt-6 lg:mt-0">
            <h3 className="text-lg font-semibold">Berita Gembira</h3>
  
            <div className="relative rounded-xl overflow-hidden shadow">
              <img
                src={mockNews[0].image}
                alt={mockNews[0].title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end text-white">
                <h4 className="text-sm font-semibold">{mockNews[0].title}</h4>
                <span className="text-xs">{mockNews[0].date}</span>
              </div>
            </div>
  
            <div className="space-y-3">
              {mockNews.slice(1).map((item) => (
                <div
                  key={item.id}
                  className="p-4 border rounded-lg bg-white hover:shadow cursor-pointer flex flex-col"
                >
                  <h4 className="text-sm font-medium">{item.title}</h4>
                  <span className="text-xs text-gray-500 mt-1">{item.date}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    );
  }
  