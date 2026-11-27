import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import ChinnuChapter from "@/components/ChinnuChapter";
import TirupatiChapter from "@/components/TirupatiChapter";
import NelloreChapter from "@/components/NelloreChapter";
import TejaDryfruitsChapter from "@/components/TejaDryfruitsChapter";
import AnniversaryCounter from "@/components/AnniversaryCounter";
import AnniversaryCountdown from "@/components/AnniversaryCountdown";
import Memories from "@/components/Memories";
import LoveLetter from "@/components/LoveLetter";
import AnniversarySurprise from "@/components/AnniversarySurprise";
import TeluguWishes from "@/components/TeluguWishes";
import FamilyTimeline from "@/components/FamilyTimeline";
import FinalAnniversary from "@/components/FinalAnniversary";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingPetals from "@/components/FloatingPetals";

import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import FloralDivider from "@/components/FloralDivider";
import WelcomeScreen from "@/components/WelcomeScreen";
import { PhotoProvider } from "@/components/PhotoProvider";
import { getAvailablePhotos } from "@/lib/availablePhotos";

export default function Home() {
  // Checked at build time: photos not yet in public/images show placeholders.
  const availablePhotos = getAvailablePhotos();

  return (
    <PhotoProvider available={availablePhotos}>
      <main className="min-h-screen overflow-hidden">
        <WelcomeScreen />
        <ScrollProgress />
        <FloatingPetals />
        <Navbar />

        <Hero />
        <FloralDivider />

        {/* 1. The wedding */}
        <OurStory />

        {/* 2. Chinnu arrives */}
        <ChinnuChapter />

        {/* 3–4. Tirupati, then Nellore */}
        <TirupatiChapter />
        <NelloreChapter />

        {/* 5–6. Inkollu and TEJA Dryfruits */}
        <TejaDryfruitsChapter />

        {/* 7. Present-day family */}
        <FloralDivider />
        <Memories />

        <FloralDivider />
        <FamilyTimeline />

        <AnniversaryCounter />

        <FloralDivider />
        <TeluguWishes />

        <LoveLetter />
        <AnniversaryCountdown />
        <AnniversarySurprise />

        {/* 8. The heartfelt anniversary message */}
        <FinalAnniversary />

        <Footer />

        <BackToTop />
      </main>
    </PhotoProvider>
  );
}
