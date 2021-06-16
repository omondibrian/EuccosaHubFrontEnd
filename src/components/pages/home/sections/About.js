import React from "react";
import style from "../Home.module.css";
import GroupPhoto from "../../../../assets/images/GroupPhoto.jpg";
import LeaderBoardCard from "../../../cards/leaderboard/LeaderBoardCard";
import { PathBottom, PathTop } from "../../../vectors/Vectors";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { IP_ADDRESS } from "../../../../utils/constants";
import {Request} from "../../../../utils/Request"

function AboutSection() {
  const [leaderBoard, setLeaderBoard] = React.useState([]);
  React.useEffect(() => {
    async function init() {
      const { officials, status } = await Request(`${IP_ADDRESS}/roles/officials`);
      if (status === 200) {
        setLeaderBoard(officials);
      }
    }
    init();
  }, []);
  const waveFlip = classNames(style.wave, style.flip);
  return (
    <section className={style.about} id="about">
      <div style={{ background: "#d7ecf5" }}>
        <div className={waveFlip}>
          <PathTop />
        </div>
        <h2 className={style.header} data-animate="">
          <span className="letters">About</span>
        </h2>
        <div className={style.sub_description}>
          Creating leaders and innovators Let's grow together
        </div>
        <div className={style.about__content}>
          <div className={style.about__content__text}>
            <h3 className={style.sub_header}>Eucossa Community</h3>
            <p>
              Eucossa is a students organization under the computer science
              department at Egerton University. Aiming at providing students
              with the much needed practical skills and knowledge in tools and
              technologies used to build tech solutions.
            </p>
            <Link to="/register" className={style.btn}>
              Join Us
            </Link>
          </div>
          <div className={style.about__content__image}>
            <img src={GroupPhoto} alt="Eucossa" />
          </div>
        </div>
        <div className={style.curve__bottom}>
          <PathBottom />
        </div>
      </div>

      <div className={style.team}>
        <h3 className={style.sub_header}>Our Leadership Team</h3>
        <div className={style.sub_description}>
          This is the current leadership team for the Eucossa community
        </div>
        <div className={style.team_slideShow}>
          {leaderBoard.map((profile, indx) => (
            <LeaderBoardCard key={indx} profile={profile} index={indx} />
          ))}
          {leaderBoard.map((profile, indx) => (
            <LeaderBoardCard key={indx} profile={profile} index={`${indx}-1`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
