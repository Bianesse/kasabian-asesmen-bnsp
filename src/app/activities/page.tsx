// app/kegiatan/page.tsx (atau pages/kegiatan.tsx kalau pakai pages router)
"use client";

const mockActivities = [
    {
        id: 1,
        title: "Penerimaan Siswa Baru 2025",
        date: "18 Juli 2025",
        location: "Lapangan SMKN 2 Cimahi",
        description:
            "SMK Negeri 2 Cimahi mengadakan kegiatan Masa Pengenalan Lingkungan Sekolah (MPLS) dengan semangat 'Citta Pradipa'",
        image:
            "https://smkn2cmi.sch.id/wp-content/uploads/2025/07/mpls-Original-Size-600x350.webp",
    },
    {
        id: 2,
        title: "Lomba 17 Agustus",
        date: "17 Agustus 2025",
        location: "Lapangan SMKN 2 Cimahi",
        description:
            "Dalam rangka memperingati HUT RI, siswa SMKN 2 Cimahi melaksanakan kegiatan lomba",
        image:
            "https://smkn2cmi.sch.id/wp-content/uploads/2023/07/mpls22-snapy-min-768x432.webp",
    },
    {
        id: 3,
        title: "Edu Fair 2025",
        date: "17-18 Mei 2025",
        location: "SMKN 1 Cimahi",
        description:
            "SMK Negeri 2 Cimahi berpartisipasi dalam gelaran Edu Fair yang diselenggarakan di SMK Negeri 1 Cimahi.",
        image:
            "https://smkn2cmi.sch.id/wp-content/uploads/2025/07/Picture1-600x403.jpg",
    },
    {
        id: 4,
        title: "Donor Darah - “One Drop One Hope”",
        date: "9 Mei 2025",
        location: "Lab Mesin",
        description:
            "Kami mengajak siswa untuk berpartisipasi dalam kegiatan donor darah guna membantu sesama.",
        image:
            "https://smkn2cmi.sch.id/wp-content/uploads/2025/05/donor-darah-2025-600x403.webp",
    },
];

export default function ActivitiesPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 mt-20">
            <h1 className="text-3xl font-bold mb-4">Kegiatan</h1>
            <hr className="mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
                {mockActivities.map((item) => (
                    <article
                        key={item.id}
                        className="mb-6 break-inside-avoid rounded-xl bg-white shadow hover:shadow-lg transition overflow-hidden"
                    >
                        {/* Thumbnail */}
                        <img
                            src={item.image}
                            alt={item.title}
                            width={1200}
                            height={675}
                            className="w-full h-56 object-cover hover:scale-105 transition"
                        />

                        {/* Content */}
                        <div className="p-6">
                            <span className="text-sm text-amber-600 font-medium">
                                {item.location}
                            </span>
                            <h2 className="text-lg font-semibold mt-2 mb-2 hover:text-amber-700 cursor-pointer">
                                {item.title}
                            </h2>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
