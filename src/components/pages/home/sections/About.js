import React from "react";
import style from "../Home.module.css";
import CommunityCard from "../../../cards/community/Community";
import { Android, Brain, Code, Security } from "../../../vectors/Vectors";
import GroupPhoto from "../../../../assets/images/GroupPhoto.jpg";
import Profile from "../../../cards/profile/Profile";

function AboutSection({ ourTeam }) {
  return (
    <section className={style.about} id="about">
      <h2 className={style.header} data-animate="">
        <span className="letters">About</span>
      </h2>
      <div className={style.sub_description}>
        Creating leaders and innovators Let's grow together
      </div>
      <div className={style.about__content}>
        <div className={style.about__content__text}>
          <p>
            Eucossa is a students organization under the computer science
            department at Egerton University. Aiming at providing students with
            the much needed practical skills and knowledge in tools and
            technologies used to build tech solutions.
          </p>
          <h3 className={style.sub_header}>Our Communities</h3>
          <div className={style.communities}>
            <CommunityCard
              community={{
                Icon: Android,
                title: "Mobile Develoment",
                description: `Eucossa is students organization under the computer science
              technologies being used to build solutions.`,
              }}
            />
            <CommunityCard
              community={{
                Icon: Code,
                title: "Web Develoment",
                description: `Eucossa is students organization under the computer science
              technologies being used to build solutions.`,
              }}
            />
            <CommunityCard
              community={{
                Icon: Security,
                title: "Security",
                description: `Eucossa is students organization under the computer science
              technologies being used to build solutions.`,
              }}
            />
            <CommunityCard
              community={{
                Icon: Brain,
                title: "Machine Learning",
                description: `Eucossa is students organization under the computer science
              technologies being used to build solutions.`,
              }}
            />
          </div>
        </div>
        <div className={style.about__content__image}>
          <img src={GroupPhoto} alt="Eucossa" />
        </div>
      </div>
      <div className={style.team}>
        <h3 className={style.sub_header}>Our Leadership Team</h3>
        <div className={style.sub_description}>
          This is the current leadership team for the Eucossa community
        </div>
        <div className={style.team_slideShow}>
          {ourTeam.map((profile, indx) => (
            <Profile key={indx} profile={profile} index={indx} />
          ))}
          {ourTeam.map((profile, indx) => (
            <Profile key={indx} profile={profile} index={`${indx}-1`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
