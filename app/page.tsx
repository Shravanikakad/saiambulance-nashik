import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Reviews from "../components/sections/Reviews";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <Services />

      <WhyChooseUs />

      <Reviews />

      <Contact />

      <Footer />

    </main>
  );
}