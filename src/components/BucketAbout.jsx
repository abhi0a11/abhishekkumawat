import React from "react";
import styles from "./BucketAbout.module.css";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-scroll";
import Tilt from "react-parallax-tilt";

const BucketAbout = () => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.01}
      style={{ flexBasis: "inherit" }}
    >
      <div className={`text-white animateRight ${styles.bucket_container} `}>
        <div>
          <h1 className="">About</h1>
          <div className={`${styles.branding_info} text-white`}>
            <p>
              A strong{" "}
              <span style={{ color: "#00ff99", fontWeight: "500" }}>
                problem-solver{" "}
              </span>
              with deep understanding of data structures and algorithms.
              Proficient in{" "}
              <span style={{ color: "#00ff99", fontWeight: "500" }}>
                C++ and JavaScript
              </span>
              , I have keen{" "}
              <span style={{ color: "#00ff99", fontWeight: "500" }}>
                interest in software development{" "}
              </span>
              , I am prepared to contribute to innovative projects and thrive in
              challenging technical environments.
            </p>
          </div>
        </div>
        <div className={`${styles.branding_social} `}>
          <Link
            to="AboutMe"
            className={`animateUp btn-animated btn btn-skin-outline btn-lg px-4 ${styles.resumeBtn} `}
          >
            Get Info{" "}
            <FaArrowCircleDown
              className={`animateDribble ${styles.downArrow}`}
            />
          </Link>
        </div>
      </div>
    </Tilt>
  );
};

export default BucketAbout;
