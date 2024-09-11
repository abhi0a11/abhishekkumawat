import React from "react";
import styles from "./BucketAbout.module.css";
import resumePdf from "../assets/resume__abhi.pdf";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-scroll";

const BucketAbout = () => {
  return (
    <>
      <div className={`animateRight ${styles.bucket_container} `}>
        <h1 className="text-white">About</h1>
        <div className={`${styles.branding_info} text-white`}>
          <p>
            A strong problem-solver with over 800 Leetcode questions solved, I
            have a deep understanding of data structures and algorithms.
            Proficient in C++ and JavaScript, I have consistently delivered
            high-quality solutions while pursuing a BTech in Computer Science at
            NSUT, New Delhi. With a keen interest in software development, I am
            prepared to contribute to innovative projects and thrive in
            challenging technical environments.
          </p>
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
    </>
  );
};

export default BucketAbout;
