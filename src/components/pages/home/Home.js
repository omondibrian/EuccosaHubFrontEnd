import React, { useState } from "react";
import style from "./Home.module.css";
import Img from "../../../assets/images/im.jpg";
import Footer from "../../footer/Footer";
import avator from "../../../assets/images/avatar.png";
import Img2 from "../../../assets/images/profile/2.jpeg";
import Img3 from "../../../assets/images/profile/3.jpeg";
import AboutSection from "./sections/About";
import EventSection from "./sections/Event";
import SiteHeroSection from "./sections/SiteHero";
import TestimonialSection from "./sections/Testimonial";

const ourTeam = [
  {
    fullName: "Jonathan Onderi",
    position: "Developer",
    img_src: avator,
  },
  {
    fullName: "Jonathan Onderi",
    position: "Developer",
    img_src: Img2,
  },
  {
    fullName: "Jonathan Onderi",
    position: "Developer",
    img_src: Img3,
  },
  {
    fullName: "Jonathan Onderi",
    position: "Developer",
    img_src: Img3,
  },
  {
    fullName: "Jonathan Onderi",
    position: "Developer",
    img_src: Img3,
  },
];

const myEvent = {
  title: "Mastering the Language",
  sub_title: "Mastering the Language",
  date: "jan 19 2018",
  time: "8:30 am",
  location: "Nakuru",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.",
  img: Img,
};

const testimonials = [
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.",
    user: {
      fullName: "Jonathan Onderi",
      occupation: "Developer",
      profile: avator,
    },
  },
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.",
    user: {
      fullName: "User two",
      occupation: "Developer",
      profile: Img2,
    },
  },
];

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
