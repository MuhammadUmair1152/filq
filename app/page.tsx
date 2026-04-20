import Navigation from "./components/Navigation";
import Hero from "./components/sections/Hero";
import Marquee from "./components/sections/Marquee";
import AboutUs from "./components/sections/AboutUs";
import ServicesGrid from "./components/sections/ServicesGrid";
import Cases from "./components/sections/Cases";
import BannerCTA from "./components/sections/BannerCTA";
import Portfolio from "./components/sections/Portfolio";
import Industries from "./components/sections/Industries";
import Testimonials from "./components/sections/Testimonials";
import BlogGrid from "./components/sections/BlogGrid";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <AboutUs />
        <ServicesGrid />
        <Cases />
        <BannerCTA />
        <Portfolio />
        <Industries />
        <Testimonials />
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}
