import React from "react";
import styles from "./BucketResume.module.css";
import resumePdf from "../assets/resume__abhi.pdf";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
const BucketResume = () => {
  return (
    <>
      <div className={`animateLeft ${styles.bucket_container} `}>
        <h1 className="text-white">Resume</h1>

        <div className={`${styles.branding_info} text-white`}>
          <p>
            I bring a robust foundation in both frontend and backend
            technologies, with proven experience in React.js, Node.js and other
            frameworks. My expertise spans designing and developing scalable web
            applications and RESTful APIs, demonstrated through internships at
            Roxwell Technologies Intern.
          </p>
        </div>
        <div className={`${styles.branding_social} `}>
          <a
            download="resume"
            href={resumePdf}
            className={`animateUp btn-animated btn btn-skin-outline btn-lg px-4 ${styles.resumeBtn} `}
          >
            Download CV
          </a>
          <div className={`${styles.mobile}`}>
            <div
              className={`btn-animated btn-skin-outline ${styles.icon_div} animateUp`}
            >
              <a
                href="https://www.linkedin.com/in/abhishekkumawt/"
                target="_blank"
                className={`text-white ${styles.branding_btn} `}
              >
                <FaLinkedinIn className={`${styles.fa__icon__detail}`} />
              </a>
            </div>
            <div
              className={`btn-animated btn-skin-outline ${styles.icon_div} animateUp`}
            >
              <a
                href="https://github.com/abhi0a11"
                target="_blank"
                className={`${styles.branding_btn} `}
              >
                <FiGithub className={`${styles.fa__icon__detail}`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BucketResume;
