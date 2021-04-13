import React, { useState } from "react";
import style from "./Home.module.css";
import Img from "../../../assets/images/im.jpg";
import Footer from "../../footer/Footer";
import avator from "../../../assets/images/avatar.png";
import Img1 from "../../../assets/images/profile/1.jpeg";
import Img2 from "../../../assets/images/profile/2.jpeg";
import Img3 from "../../../assets/images/profile/3.jpeg";
import EventSkeleton from "../../skeletons/EventSkeleton";
import AboutSkeleton from "../../skeletons/AboutSkeleton";
import TeamSkeleton from "../../skeletons/TeamSkeleton";
import TestimonialSkeleton from "../../skeletons/TestimonialSkeleton";

  const ourTeam=[{
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
      <section className={style.site_hero}>
        <SiteHero />
        <div className={style.site_hero__animate} id="site_hero_animate">
          <BackGround>
            <SiteHero />
          </BackGround>
        </div>
      </section>
      <section className={style.events}>
        <h2 className={style.header} data-animate="" id="anime">
          <span className="letters">Events</span>
          <span className={`line ${style.line}`}></span>
        </h2>
        <div className={style.events__timeline}>
          <div className={style.events__timeline__card}>
            {/* <EventSkeleton /> */}
             <EventCard event={myEvent} />
          </div>
          <div className={style.events__timeline__card}>
            <EventCard event={myEvent} />
            {/* <EventSkeleton /> */}
          </div>
        </div>
      </section>
      <section className={style.about}>
        <h2 className={style.header} data-animate="">
          <span className="letters">About</span>
          <span className={`line ${style.line}`}></span>
        </h2>
        <div className={style.about__content}>
          <div className={style.about__content__text}>
            {/* <h3>About Us</h3> */}
            {/* <AboutSkeleton />
          </div> */}
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
              dolorum architecto obcaecati enim dicta praesentium, quam nobis!
              Neque ad aliquam facilis numquam. Veritatis, sit.Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Ad eum dolorum architecto
              obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam
              facilis numquam. Veritatis, sit.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ad eum dolorum architecto obcaecati
              enim dicta praesentium, quam nobis! Neque ad aliquam facilis
              numquam. Veritatis, sit.Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta
              praesentium, quam nobis! Neque ad aliquam facilis numquam.
              Veritatis, sit
            </p>
          </div>
          <div className={style.about__content__image}>
            <img src={GroupPhoto} alt="Eucossa" />
          </div>
        </div>
        <div className={style.team}>
          <h3 className={style.sub_header}>Our Team</h3>
          <div className={style.d_flex} id="team-slider">
            {/* <TeamSkeleton /> */}
            {ourTeam.map((profile, indx) => (
              <Profile key={indx} profile={profile} index={indx} />
            ))}
          </div>
        </div>
      </section>
      <section className={style.testimonial}>
        {/* <TestimonialSkeleton /> */}
        <TestimonialCard
          message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
          user={{
            fullName: "Jonathan Onderi",
            occupation: "Developer",
            profile: avator,
          }}
        />
      </section>
      <Footer />  
    </div>
  );
}

export default Home;
