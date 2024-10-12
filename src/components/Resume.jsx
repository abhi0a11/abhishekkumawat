import styles from "./Resume.module.css";
import React, { useEffect } from "react";
import { useState } from "react";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import Experience from "./Experience";
import Education from "./Education";
import Profile from "./Profile.jsx";
import axios from "axios";

const Resume = () => {
  const [frontend, setFrontend] = useState(true);
  const [backend, setBackend] = useState(false);
  const [experiance, setExperiance] = useState(false);
  const [education, setEducation] = useState(false);
  const [profile, setProfile] = useState(false);
  const [head, setHead] = useState("Frontend Skills");

  const [CCdata, setCCdata] = useState({
    ccrating: 0,
    ccontest: 0,
    topcc: 0,
    ccStar: 0,
  });
  const [LCdata, setLCdata] = useState({
    lcrating: 1657,
    lcontest: 34,
    top: 8,
  });

  const [CFdata, setCFdata] = useState({
    cfrating: 410,
    cfContest: 1,
    cfTop: 13666,
  });
  //  prettier-ignore
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://codechef-api.vercel.app/handle/abhi_ak21"
        );

        if (!res) return;

        setCCdata({
          ccrating: res.data.currentRating,
          ccontest: res.data.ratingData.length,
          topcc: res.data.globalRank,
          ccStar: res.data.stars,
        });
      } catch (error) {
        return;
      }
    })()
    ;(async () => {
      try {
        const res = await axios.get(
          "https://alfa-leetcode-api.onrender.com/abhishek_123321/contest"
        );

        if (!res) return;
        setLCdata({
          lcrating: res.data.contestRating,
          lcontest: res.data.contestAttend,
          top: res.data.contestTopPercentage,
        });
      } catch (error) {
        return;
      }
    })()
    ;(async () => {
      try {
        const res = await axios.get(
          "https://codeforces.com/api/user.rating?handle=abhishek_123321",{
            changeOrigin:true
          }
        );
        if (!res) return;

        setCFdata({
          cfrating: res.data.result[res.data.result.length - 1].newRating,
          cfContest: res.data.result.length,
          cfTop: res.data.result[res.data.result.length-1].rank,
        });
      } catch (error) {
        return;
      }
    })();
  }, []);

  const handleEductation = () => {
    setHead("Education");
    setFrontend(false);
    setBackend(false);
    setExperiance(false);
    setProfile(false);
    setEducation(true);
  };
  const handleFrontend = () => {
    setHead("Frontend Skills");
    setFrontend(true);
    setBackend(false);
    setExperiance(false);
    setProfile(false);
    setEducation(false);
  };
  const handleBackend = () => {
    setHead("Backend Skills");
    setFrontend(false);
    setBackend(true);
    setExperiance(false);
    setProfile(false);
    setEducation(false);
  };
  const handleExperience = () => {
    setHead("Experience");
    setFrontend(false);
    setBackend(false);
    setExperiance(true);
    setEducation(false);
    setProfile(false);
  };
  const handleProfile = () => {
    setHead("CP Profiles");
    setProfile(true);
    setFrontend(false);
    setBackend(false);
    setExperiance(false);
    setEducation(false);
  };

  return (
    <section>
      <section id="SkillsID" className={`bg-color ${styles.skills_container}`}>
        <div className={`${styles.tabs_section}`}>
          <div className={`kablammo-font tourney-font ${styles.heading}`}>
            Why hire me?
          </div>

          <button
            type="button"
            className={`${styles.navigation_btn} ${education && "activeBtn"}`}
            onClick={handleEductation}
          >
            Education
          </button>
          <button
            type="button"
            className={`${styles.navigation_btn} ${frontend && "activeBtn"}`}
            onClick={handleFrontend}
          >
            Frontend Skills
          </button>
          <button
            type="button"
            className={`${styles.navigation_btn} ${backend && "activeBtn"}`}
            onClick={handleBackend}
          >
            Backend Skills
          </button>
          <button
            type="button"
            className={`${styles.navigation_btn} ${experiance && "activeBtn"}`}
            onClick={handleExperience}
          >
            Experience
          </button>
          <button
            type="button"
            className={`${styles.navigation_btn} ${profile && "activeBtn"}`}
            onClick={handleProfile}
          >
            CP Profiles
          </button>
        </div>
        <div className={`${styles.info_container}`}>
          <div className={`kablammo-font ${styles.heading}`}>{head}</div>
          <div className={`${styles.info}`}>
            {frontend && <FrontendSkills />}
            {backend && <BackendSkills />}
            {experiance && <Experience />}
            {education && <Education />}
            {profile && (
              <Profile CCdata={CCdata} LCdata={LCdata} CFdata={CFdata} />
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Resume;
