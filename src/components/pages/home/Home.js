import React, { useState } from "react";
import style from "./Home.module.css";
import Footer from "../../footer/Footer";
import AboutSection from "./sections/About";
import EventSection from "./sections/Event";
import SiteHeroSection from "./sections/SiteHero";
import TestimonialSection from "./sections/Testimonial";
import { ourTeam, testimonials } from "../../../data/Dammy/home.data";
import { fetchAllPublicEvents } from "../../../services/events.service";



function Home() {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [events, setEvents] = React.useState([]);
  React.useEffect(() => {
    async function initializeEvents() {

      const res = await fetchAllPublicEvents()
      console.log(res)
      if (res.status===200) {
        setEvents(res.events)
      }
    }
    initializeEvents()
  }, [])
  
  return (
    <div className={style.home} id="home">
    {/* <Menu /> */}
      <SiteHeroSection />
      <EventSection events={events} />
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
