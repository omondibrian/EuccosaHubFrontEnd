import React, { useState } from "react";
import style from "./Home.module.css";
import Footer from "../../footer/Footer";
import AboutSection from "./sections/About";
import EventSection from "./sections/Event";
import SiteHeroSection from "./sections/SiteHero";
import TestimonialSection from "./sections/Testimonial";
import { ourTeam, testimonials, myEvent } from "../../../data/Dammy/home.data";


function Home() {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  return (
    <div className={style.home}>
      <SiteHeroSection />
      <EventSection events={[myEvent, myEvent]} />
      <AboutSection ourTeam={ourTeam} />
      <TestimonialSection
        testimonials={testimonials}
        activeTestimonialIndex={activeTestimonialIndex}
        setActiveTestimonialIndex={setActiveTestimonialIndex}
      />
      <Footer />
    </div>
  );
}

export default Home;
