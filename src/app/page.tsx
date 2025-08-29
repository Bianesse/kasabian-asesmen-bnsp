import FeaturesSection from "@/comps/features";
import Hero from "@/comps/hero";
import Jurusan from "@/comps/jurusan";
import StatsSection from "@/comps/stat";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <StatsSection />
      <Jurusan />
    </div>
  );
}
