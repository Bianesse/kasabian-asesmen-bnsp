import { ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url('https://smkn2cmi.sch.id/wp-content/uploads/2025/05/20200518_1-min.webp')`,
            filter: 'blur(2px)',
            transform: 'scale(1.1)'
          }}
        ></div>


        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
            SMK NEGERI 2 CIMAHI
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Prestasi Tanpa Batas, Keunggulan Tanpa Henti!


          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Link href="/movies">
              <button className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl">
                Book Tickets Now
              </button>
            </Link>

            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-amber-900 rounded-lg text-lg font-semibold transition-all"
              onClick={() => toast.warning("Fitur ini masih dalam pengembangan")}>
              View Showtimes
            </button> */}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </div>
      </section>
    );
}