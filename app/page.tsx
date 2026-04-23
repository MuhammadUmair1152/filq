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
import Stats from "./components/sections/Stats";
import Whyfilq from "./components/sections/Whyfilq";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        {/* <Marquee /> */}
        <Whyfilq/>
        <ServicesGrid />
        <Cases />
        {/* <BannerCTA /> */}
        <AboutUs />
        <Portfolio />
        <Industries />
        <Testimonials />
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}
