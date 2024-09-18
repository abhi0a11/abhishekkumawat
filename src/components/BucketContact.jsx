import React from "react";
import styles from "./BucketContact.module.css";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-scroll";
import Tilt from "react-parallax-tilt";
import { MdAttachEmail } from "react-icons/md";
const BucketContact = () => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      style={{ flexBasis: "inherit" }}
      scale={1.01}
    >
      <div className={`animateDown text-white ${styles.bucket_container} `}>
        <div>
          <h1 style={{ fontSize: "clamp(25px, 5vw, 40px)" }}>Contact me!</h1>
          <div className={`${styles.branding_info} text-white`}>
            <p>
              I'm always{" "}
              <span style={{ color: "#00ff99", fontWeight: "500" }}>
                {" "}
                open to new opportunities and collaborations{" "}
              </span>{" "}
              on innovative projects—feel free to connect if you'd like to
              discuss potential roles, technical challenges, or industry
              insights!
            </p>
          </div>
        </div>
        <div className={`${styles.branding_social} `}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abhishekkumawat.ak21@gmail.com"
            target="_blank"
            className={`animateUp btn-animated btn btn-skin-outline btn-lg px-4 ${styles.resumeBtn} `}
          >
            Email Me <MdAttachEmail className={` ${styles.downArrow}`} />
            {/* <FaArrowCircleDown
              className={`animateDribble ${styles.downArrow}`}
            /> */}
          </a>
          {/* <Link
            to="Contact-Form"
            className={`animateUp btn-animated btn btn-skin-outline btn-lg px-4 ${styles.resumeBtn} `}
          >
            Contact{" "}
            <FaArrowCircleDown
              className={`animateDribble ${styles.downArrow}`}
            />
          </Link> */}
        </div>
      </div>
    </Tilt>
  );
};

export default BucketContact;
