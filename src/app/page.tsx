import About from "@/components/About";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Restaurant from "@/components/Restaurant";
import Rooms from "@/components/Rooms";
import Settings from "@/components/Settings";
import RevealObserver from "@/components/RevealObserver";
import Wellness from "@/components/Wellness";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Rooms />
        <Restaurant />
        <Settings />
        <Destinations />
        <Wellness />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
