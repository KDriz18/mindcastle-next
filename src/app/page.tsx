import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import WhyMindCastle from "@/components/home/WhyMindCastle";
import Programs from "@/components/home/Programs";
import Achievements from "@/components/home/Achievements";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";
import AchievementMarquee from "@/components/home/AchieveMarquee";
import OurCoaches from "@/components/home/OurCoaches";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <StatsBar />
        <AchievementMarquee />
        <WhyMindCastle/>
        <OurCoaches />
        <Programs/>
        <Achievements />
        <Testimonials />
        <ContactCTA />
        <Footer />
      </main>
    </>
  );
}