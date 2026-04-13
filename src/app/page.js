import Friends from "@/componants/Friends/page";
import HeroSection from "@/componants/Hero/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <Friends />
      </main>
    </div>
  );
}
