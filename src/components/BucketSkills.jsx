import React from "react";
import styles from "./BucketSkills.module.css";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-scroll";

const BucketSkills = () => {
  return (
    <>
      <div className={`animateRight text-white ${styles.bucket_container} `}>
        <h1>Skills & Experience</h1>
        <div className={`${styles.branding_info} text-white`}>
          <p>
            Dive into the projects and experiences that have shaped my skills.
            From internships where I built full-stack applications to solving
            over 800 algorithm challenges on Leetcode, my path has been driven
            by a passion for problem-solving and continuous learning. Feel free
            to connect and discover more about my work.
          </p>
        </div>
        <div className={`${styles.branding_social} `}>
          <Link
            to="Skills"
            className={`animateUp btn-animated btn btn-skin-outline btn-lg px-4 ${styles.resumeBtn} `}
          >
            Have a look!{" "}
            <FaArrowCircleDown
              className={`animateDribble ${styles.downArrow}`}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BucketSkills;
