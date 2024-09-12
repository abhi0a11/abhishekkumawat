import React from "react";
import styles from "./BucketProject.module.css";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-scroll";
import Tilt from "react-parallax-tilt";

const BucketProject = () => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      style={{ flexBasis: "inherit" }}
      scale={1.01}
    >
      <div className={`animateLeft text-white ${styles.bucket_container} `}>
        <div>
          <h1>Projects</h1>
          <div className={`${styles.branding_info} text-white`}>
            <a href="https://ws-app-clone.netlify.app/" target="_blank">
              <h1 className="animateInRight" style={{ color: "#00ff99" }}>
                Whatsapp Clone
              </h1>
            </a>
            <a href="https://forkify-abhishek.netlify.app/" target="_blank">
              <h1 className="animateInRight" style={{ color: "#00ff99" }}>
                Forkify
              </h1>
            </a>
            <a
              href="https://todo-appauthenticated.netlify.app/"
              target="_blank"
            >
              <h1 className="animateInRight" style={{ color: "#00ff99" }}>
                Snake Game
              </h1>
            </a>
            <a
              href="https://snake-game-retrostyle.netlify.app/"
              target="_blank"
            >
              <h1 className="animateInRight" style={{ color: "#00ff99" }}>
                Todo App
              </h1>
            </a>
            <a
              href="https://abhi0a11.github.io/Guess-the-number/"
              target="_blank"
            >
              <h1 className="animateInRight" style={{ color: "#00ff99" }}>
                Guess the number
              </h1>
            </a>
          </div>
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
    </Tilt>
  );
};

export default BucketProject;
