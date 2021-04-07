import React, { useEffect } from "react";
import BackGround from "../../background";
import style from "./Home.module.css";
import EventCard from "../../cards/event/EventCard";
import Img from "../../../assets/images/im.jpg";
import Footer from "../../footer/Footer";
import Navbar from "../../navigation/navbar";
import TestimonialCard from "../../cards/testimonial/TestimonialCard";
import avator from "../../../assets/images/avatar.png";
import { textWrite, EventCardAnimate } from "../../animations/Animations";
import GroupPhoto from "../../../assets/images/GroupPhoto.jpg";
import Profile from "../../cards/profile/Profile";
import Img1 from "../../../assets/images/profile/1.jpeg";
import Img2 from "../../../assets/images/profile/2.jpeg";
import Img3 from "../../../assets/images/profile/3.jpeg";

const ourTeam = [
  {
    fullName: "Jonathan Onderi",
    position: "Developer",
    img_src: Img1,
  },
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
];

const createWaveAnimation = () => {
  const height = window.innerHeight;
  const amplitude = 70;
  const units = 4 * Math.PI;
  let clipPathPoints = {
    startPath: "polygon(100% 100%, 0% 100%",
    firstControlPath: "polygon(100% 100%, 0% 100%",
    secondControlPath: "polygon(100% 100%, 0% 100%",
    endPath: "polygon(100% 100%, 0% 100%",
  };
  let startPoint, firstControlPoint, secondControlPoint, endPoint;
  for (let i = 0; i <= 100; ++i) {
    startPoint = height + amplitude * Math.cos((i / 100) * units + 5);
    startPoint = (Math.round(startPoint, 5) / height) * 100;
    clipPathPoints["startPath"] += `,  ${i}% ${startPoint}%`;

    firstControlPoint =
      (height * 2) / 3 + (amplitude / 2) * Math.cos((i / 100) * units - 3);
    firstControlPoint = (Math.round(firstControlPoint, 5) / height) * 100;
    clipPathPoints["firstControlPath"] += `, ${i}%  ${firstControlPoint}%`;

    secondControlPoint =
      (height * 1) / 3 + amplitude * Math.cos((i / 100) * units + 5);
    secondControlPoint = (Math.round(secondControlPoint, 5) / height) * 100;
    clipPathPoints["secondControlPath"] += `,  ${i}% ${secondControlPoint}%`;

    endPoint = -3 * Math.cos((i / 100) * units);
    endPoint = (Math.round(endPoint, 5) / height) * 100;
    clipPathPoints["endPath"] += `,  ${i}% ${endPoint}%`;
  }
  clipPathPoints["startPath"] += ")";
  clipPathPoints["firstControlPath"] += ")";
  clipPathPoints["secondControlPath"] += ")";
  clipPathPoints["endPath"] += ")";
  console.log(clipPathPoints["secondControlPath"]);
  return clipPathPoints;
};

const SiteHero = () => {
  const clipPathPoints = createWaveAnimation();
  const animate = (clipPathPoints) => {
    document
      .querySelector("#site_hero_animate")
      .animate(
        [
          { clipPath: clipPathPoints["startPath"] },
          { clipPath: clipPathPoints["firstControlPath"] },
          { clipPath: clipPathPoints["secondControlPath"] },
          { clipPath: clipPathPoints["endPath"] },
        ],
        {
          duration: 2000,
        }
      );
  };

  useEffect(() => {
    animate(clipPathPoints);
    textWrite("#anime");
    EventCardAnimate(`.${style.events__timeline__card}>div`);
  }, [clipPathPoints]);

  return (
    <div>
      <div className={style.site_hero__content}>
        <Navbar />
        <h1 className={style.site_hero__header}>EUCCOSA COMMUNITY</h1>
        <div className={style.site_hero__text}>
          Egerton university computer science students association
        </div>
        <a href="/" className={style.site_hero__btn}>
          Join Us
        </a>
      </div>
    </div>
  );
};

function Home() {
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
          {/* <span className={`line ${style.line}`}></span> */}
        </h2>
        <div className={style.events__timeline}>
          <div className={style.events__timeline__card}>
            <EventCard event={myEvent} />
          </div>
          <div className={style.events__timeline__card}>
            <EventCard event={myEvent} />
          </div>
        </div>
      </section>
      <section className={style.about}>
        <h2 className={style.header} data-animate="">
          <span className="letters">About</span>
          {/* <span className={`line ${style.line}`}></span> */}
        </h2>
        <div className={style.about__content}>
          <div className={style.about__content__text}>
            <h3>About Us</h3>
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
          <div className={style.d_flex}>
            {ourTeam.map((profile) => (
              <Profile key={profile.fullName} profile={profile} />
            ))}
          </div>
        </div>
      </section>
      <section className={style.testimonial}>
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
