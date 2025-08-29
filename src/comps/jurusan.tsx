const jurusan = [
    { name: "Animasi", logo: "https://smkn2cmi.sch.id/wp-content/uploads/2019/06/logo-animasi-min.png" },
    { name: "Multimedia", logo: "https://smkn2cmi.sch.id/wp-content/uploads/2018/06/logo-multimedia_min.png" },
    { name: "Rekayasa Perangkat Lunak", logo: "https://smkn2cmi.sch.id/wp-content/uploads/2021/06/logo-rpl-new_min.png" },
    { name: "Teknik Kimia Industri", logo: "https://smkn2cmi.sch.id/wp-content/uploads/2018/05/Logo-Kimia_min.png" },
    { name: "Mekatronika", logo: "https://smkn2cmi.sch.id/wp-content/uploads/2018/05/Logo-Meka_min.png" },
    { name: "Teknik Pemesinan", logo: "https://smkn2cmi.sch.id/wp-content/uploads/2019/06/Logo-Mesin-min.png" },
];

export default function Jurusan() {
    return (
        <section className="py-16 bg-gray-900 text-white">
            <div className="max-w-4/5 mx-auto px-6">

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {jurusan.map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-32 h-32 md:w-48 md:h-48 flex items-center justify-center rounded-xl p-4 transition transform group-hover:scale-110">
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                            <h3 className="mt-4 text-md font-medium">{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

