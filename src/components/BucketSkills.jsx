import React from "react";
import styles from "./BucketSkills.module.css";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-scroll";
import Tilt from "react-parallax-tilt";

const BucketSkills = () => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      style={{ flexBasis: "inherit" }}
      scale={1.01}
    >
      <div className={`animateRight text-white ${styles.bucket_container} `}>
        <div>
          <h1>Skills & Experience</h1>
          <div className={`${styles.branding_info} text-white`}>
            <p>
              Have a look on{" "}
              <span style={{ color: "#00ff99", fontWeight: "500" }}>
                my journey{" "}
              </span>
              from a beginner to a skilled problem-solver and developer.It
              prepared me to tackle complex technical challenges and drive
              innovative projects.
            </p>
          </div>
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
    </Tilt>
  );
};

export default BucketSkills;
