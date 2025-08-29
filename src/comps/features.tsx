import { Wifi, FlaskConical, Target, Monitor, Landmark, MapPin } from "lucide-react";

const features = [
  {
    icon: <Wifi className="w-8 h-8 text-sky-400" />,
    title: "Akses Internet",
    desc: "Terdapat banyak akses internet gratis / Free WiFi di area sekolah.",
  },
  {
    icon: <FlaskConical className="w-8 h-8 text-sky-400" />,
    title: "Laboratorium",
    desc: "Memiliki 11 lab, di antaranya: 2 Lab Animasi, 3 Lab Multimedia, 1 Lab Mekatronika, 1 Lab Mesin, 1 Lab Kimia, 3 Lab Rekayasa Perangkat Lunak.",
  },
  {
    icon: <Target className="w-8 h-8 text-sky-400" />,
    title: "Motto",
    desc: "BMW = Bekerja, Melanjutkan, Wirausaha.",
  },
  {
    icon: <Monitor className="w-8 h-8 text-sky-400" />,
    title: "Jumlah Komputer",
    desc: "Memiliki lebih dari 150 komputer yang tersebar di berbagai lab.",
  },
  {
    icon: <Landmark className="w-8 h-8 text-sky-400" />,
    title: "Luas Tanah",
    desc: "Sekitar 16.096 m² dengan 2 lapangan olahraga dan halaman parkir yang luas.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-sky-400" />,
    title: "Lokasi",
    desc: "Jl. Kamarung Km. 1,5 No. 69 Kel. Citeureup, Kec. Cimahi Utara, Kota Cimahi.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {features.map((item, i) => (
          <div key={i} className="flex items-start space-x-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

