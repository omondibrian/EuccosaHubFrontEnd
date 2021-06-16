import React from "react";
import style from "./Home.module.css";
import Footer from "../../footer/Footer";
import AboutSection from "./sections/About";
import EventSection from "./sections/Event";
import SiteHeroSection from "./sections/SiteHero";
import TestimonialSection from "./sections/Testimonial";

function Home() {
  return (
    <div className={style.home} id="home">
      <SiteHeroSection />
      <EventSection />
      <AboutSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default Home;
