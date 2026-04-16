import Friends from "@/app/friends/page";
import HeroSection from "@/componants/Hero/page";
import StatsBar from "@/componants/StatsBar/page";
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
