export default function AboutPage() {
    return (<>
        <div className="max-w-6xl mx-auto px-6 py-12 mt-16">

            <div className="aspect-w-16 aspect-h-9 mb-8">
                <iframe
                    src="https://www.youtube.com/embed/CEasKw_0QPs"
                    title="Profil SMK Negeri 2 Cimahi"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64 md:h-96 rounded-lg shadow-lg"
                />

            </div>
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
                About SMK Negeri 2 Cimahi
            </h1>
            <hr className="border-t-3 border-blue-400 w-1/4 mx-auto mb-6" />

            {/* Intro */}
            <p className="text-gray-600 leading-relaxed mb-6">
                SMK Negeri 2 Cimahi adalah salah satu SMK terbaik di Cimahi. Sekolah ini
                berkomitmen mencetak lulusan unggul dan siap kerja. Berlokasi strategis
                di wilayah utara Kota Cimahi, Jawa Barat, sekolah ini berdiri sejak
                tahun 2007. Sejak saat itu, SMK Negeri 2 Cimahi telah berkembang pesat
                dan menempati lahan seluas <span className="font-medium">15.609 m²</span>.
            </p>

            {/* Jurusan */}
            <p className="text-gray-600 leading-relaxed mb-4">
                Sejak awal berdirinya, SMK Negeri 2 Cimahi telah menunjukkan
                perkembangan signifikan. Dari yang semula hanya membuka dua kompetensi
                keahlian, seiring berjalannya waktu kini telah berkembang menjadi{" "}
                <span className="font-semibold">sekolah kejuruan di Jawa Barat</span>{" "}
                dengan enam program keahlian unggulan, antara lain:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>
                    <span className="font-semibold">Teknik Elektronika</span> – Konsentrasi
                    Teknik Mekatronika
                </li>
                <li>
                    <span className="font-semibold">Desain Komunikasi Visual (DKV)</span>
                </li>
                <li>
                    <span className="font-semibold">
                        Pengembangan Perangkat Lunak dan Gim
                    </span>{" "}
                    – Konsentrasi Rekayasa Perangkat Lunak (RPL)
                </li>
                <li>
                    <span className="font-semibold">Animasi</span>
                </li>
                <li>
                    <span className="font-semibold">Teknik Kimia Industri</span>
                </li>
                <li>
                    <span className="font-semibold">Teknik Mesin</span> – Konsentrasi
                    Teknik Pemesinan
                </li>
            </ul>

            {/* Visi-Misi */}
            <p className="text-gray-600 leading-relaxed mb-4">
                Sebagai <span className="font-semibold">SMK Negeri di Jawa Barat</span>{" "}
                yang fokus pada{" "}
                <span className="font-semibold">pendidikan vokasi berbasis industri</span>,
                SMK Negeri 2 Cimahi aktif menjalin kemitraan dengan berbagai perusahaan dan
                pelaku industri guna menyelaraskan kurikulum dengan kebutuhan Dunia Usaha
                dan Dunia Industri (DUDI).
            </p>

            {/* Program Unggulan */}
            <p className="text-gray-600 leading-relaxed mb-2">
                Beberapa program unggulan yang menjadi daya tarik utama antara lain:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>
                    <span className="font-semibold">Kelas Industri BUMA SCHOOL</span> –
                    Kerja sama dengan perusahaan pertambangan batu bara
                </li>
                <li>
                    <span className="font-semibold">Kelas Industri Ayena Studio</span> –
                    Kolaborasi dengan studio animasi profesional
                </li>
                <li>
                    <span className="font-semibold">Cimahi Markerspace</span> – Program kewirausahaan digital di bidang desain
                </li>
                <li>
                    <span className="font-semibold">Teaching Factory (TeFa)</span> – Sistem pembelajaran berbasis produksi dan simulasi dunia kerja
                </li>
            </ul>

            {/* Closing */}
            <p className="text-gray-600 leading-relaxed">
                Melalui pendekatan berbasis industri dan inovasi pembelajaran modern,
                SMK Negeri 2 Cimahi terus bertransformasi menjadi rujukan utama bagi
                masyarakat yang mencari{" "}
                <span className="font-semibold">SMK berkualitas di Cimahi</span>{" "}
                dengan lulusan yang siap bersaing di dunia kerja maupun melanjutkan ke
                jenjang pendidikan yang lebih tinggi.
            </p>
        </div>
        
        <section className="max-w-6xl mx-auto px-4 py-16">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-gray-800">
                VISI DAN MISI
            </h2>
            <div className="border-t border-gray-300 w-3/4 mx-auto mt-4 mb-12"></div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Visi */}
                <div className="bg-orange-500 text-white rounded-lg shadow-lg p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">VISI</h3>
                    <p className="leading-relaxed">
                        Menjadikan Lulusan SMK yang Mampu Berwirausaha, Inovatif
                        di Bidang Teknologi, Religius, Santun, Handal dan Berkarakter
                        Sesuai Budaya Bangsa Sampai Tahun 2025
                    </p>
                </div>

                {/* Misi */}
                <div className="bg-green-600 text-white rounded-lg shadow-lg p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">MISI</h3>
                    <ul className="list-decimal list-inside space-y-2">
                        <li>Mewujudkan lingkungan sekolah yang religius.</li>
                        <li>Mewujudkan kompetensi kewirausahaan yang mandiri dan kompetitif.</li>
                        <li>Meningkatkan kemitraan dengan IDUKA.</li>
                        <li>Meningkatkan kompetensi siswa sesuai kebutuhan IDUKA.</li>
                        <li>
                            Mewujudkan pembelajaran berbasis produksi/project sesuai dengan kebutuhan IDUKA.
                        </li>
                        <li>Meningkatkan sumber daya manusia melalui sertifikasi IDUKA.</li>
                        <li>
                            Mewujudkan manajemen sekolah yang mengacu pada sistem manajemen mutu.
                        </li>
                        <li>Meningkatkan sarana berstandar IDUKA.</li>
                        <li>Mewujudkan nilai – nilai karakter bangsa.</li>
                    </ul>
                </div>
            </div>
        </section>
    </>
    );
}
