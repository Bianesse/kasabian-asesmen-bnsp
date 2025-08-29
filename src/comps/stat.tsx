const stats = [
    { value: "1,576", label: "Peserta Didik" },
    { value: "114", label: "Guru & Staff TU" },
    { value: "48", label: "Ruangan" },
    { value: "11", label: "Laboratorium" },
    { value: "6", label: "Kompetensi Keahlian" },
    { value: "50+", label: "Penghargaan" },
  ];
  
  export default function StatsSection() {
    return (
      <section className="bg-gray-950 py-12">
        <div className="mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <h2 className="text-5xl font-bold text-purple-400">{s.value}</h2>
              <p className="text-gray-300 text-lg">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  