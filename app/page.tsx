import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickServices from "@/components/QuickServices";
import About from "@/components/About";
import RestaurantShowcase from "@/components/RestaurantShowcase";
import BarExperience from "@/components/BarExperience";
import Homestay from "@/components/Homestay";
import Gallery from "@/components/Gallery";
import WhyChoose from "@/components/WhyChoose";
import TravelerStop from "@/components/TravelerStop";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <QuickServices />
      <About />
      <RestaurantShowcase />
      <BarExperience />
      <Homestay />
      <Gallery />
      <WhyChoose />
      <TravelerStop />
      <Reviews />
      <Location />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
