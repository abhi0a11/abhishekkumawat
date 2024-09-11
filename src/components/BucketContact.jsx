import React from "react";
import styles from "./BucketContact.module.css";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-scroll";

const BucketContact = () => {
  return (
    <>
      <div className={`animateDown text-white ${styles.bucket_container} `}>
        <h1>Contact me!</h1>
        <div className={`${styles.branding_info} text-white`}>
          <p>
            As a Full Stack Developer with a strong foundation in web
            technologies, problem-solving, and software development, I am always
            eager to explore new opportunities and collaborate on innovative
            projects. Feel free to reach out if you would like to discuss
            potential roles, technical challenges, or industry insights. I look
            forward to hearing from you and let’s discuss how we can collaborate
            on exciting new opportunities!
          </p>
        </div>
        <div className={`${styles.branding_social} `}>
          <Link
            to="Contact-Form"
            className={`animateUp btn-animated btn btn-skin-outline btn-lg px-4 ${styles.resumeBtn} `}
          >
            Contact{" "}
            <FaArrowCircleDown
              className={`animateDribble ${styles.downArrow}`}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BucketContact;
