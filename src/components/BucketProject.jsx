import React from "react";
import styles from "./BucketProject.module.css";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-scroll";

const BucketProject = () => {
  return (
    <>
      <div className={`animateLeft text-white ${styles.bucket_container} `}>
        <h1>Projects</h1>
        <div className={`${styles.branding_info} text-white`}>
          <h1 className="animateInRight" style={{ color: "#00ff99" }}>
            Whatsapp Clone
          </h1>
          <h1 className="animateInRight" style={{ color: "#00ff99" }}>
            Forkify
          </h1>
          <h1 className="animateInRight" style={{ color: "#00ff99" }}>
            Snake Game
          </h1>
          <h1 className="animateInRight" style={{ color: "#00ff99" }}>
            Todo App
          </h1>
          <h1 className="animateInRight" style={{ color: "#00ff99" }}>
            Guess the number
          </h1>
          <div className={`${styles.branding_social} `}>
            <Link
              to="portfolio-id"
              className={`animateUp btn-animated btn btn-skin-outline btn-lg px-4 ${styles.resumeBtn} `}
            >
              Check All Projects{" "}
              <FaArrowCircleDown
                className={`animateDribble ${styles.downArrow}`}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BucketProject;
