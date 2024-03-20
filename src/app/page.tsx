import HeroSection from "@/components/HeroSection";
import { ImageLayout } from "@/components/card";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <h1 className="mt-10 flex justify-center font-extrabold text-3xl">Our Products Gallery</h1>
      <ImageLayout />
    </main>
  );
}
