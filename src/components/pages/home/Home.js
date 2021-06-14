import React, { useState } from "react";
import style from "./Home.module.css";
import Footer from "../../footer/Footer";
import AboutSection from "./sections/About";
import EventSection from "./sections/Event";
import SiteHeroSection from "./sections/SiteHero";
import TestimonialSection from "./sections/Testimonial";
import { testimonials as fallBackData } from "../../../data/Dammy/home.data";
import { IP_ADDRESS } from "../../../utils/constants";

import { fetchAllPublicEvents } from "../../../services/events.service";
import { Request } from "../../../utils/Request";

function Home() {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [events, setEvents] = React.useState([]);
  const [leaderBoard, setLeaderBoard] = React.useState([]);
  const [testimonials, setTestinonials] = React.useState([]);
  React.useEffect(() => {
    async function initializeState() {
      const res = await fetchAllPublicEvents();
      const { officials, status: officialsStatus } = await Request(
        IP_ADDRESS + "/roles/officials"
      );
      const { testimonies, status: testimonialStatus } = await Request(
        IP_ADDRESS + "/testimonial"
      );

      if (
        res.status === 200 &&
        officialsStatus === 200 &&
        testimonialStatus === 200
      ) {
        setEvents(res.events);
        setLeaderBoard(officials);
        setTestinonials(testimonies);
      }
    }
    initializeState();
  }, []);
  const testimonialsData =
    testimonials.length > 0 ? testimonials : fallBackData;
  return (
    <div className={style.home} id="home">
      {/* <Menu /> */}
      <SiteHeroSection />
      <EventSection events={events} />
      <AboutSection ourTeam={leaderBoard} />
      <TestimonialSection
        testimonials={testimonialsData}
        activeTestimonialIndex={activeTestimonialIndex}
        setActiveTestimonialIndex={setActiveTestimonialIndex}
      />
      <Footer />
    </div>
  );
}

export default Home;
