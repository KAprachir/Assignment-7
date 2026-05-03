import Friends from "@/app/friends/page";
import HeroSection from "@/components/Hero/HeroSection";
import StatsBar from "@/components/StatsBar/StatsBar";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <main>
        <Suspense>
          <HeroSection />
          <StatsBar />
          <Friends />
        </Suspense>
      </main>
    </div>
  );
}
