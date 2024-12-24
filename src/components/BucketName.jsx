import React from "react";
import styles from "./BucketName.module.css";
import Tilt from "react-parallax-tilt";
import BucketProject from "./BucketProject";
import BucketSkills from "./BucketSkills";
const BucketName = () => {
  return (
    // <Tilt
    //   tiltMaxAngleX={0}
    //   tiltMaxAngleY={0}
    //   style={{ flexBasis: "55%" }}
    //   scale={1.01}
    // >

    <div
      className={`animateUp ${styles.bucket_container} `}
      style={{ transitionDelay: "100ms" }}
    >
      <div className={`${styles.branding_info} text-white`}>
        <h1 className={`animateInLeft ${styles.greet}`}>Hello I'm</h1>
        <h1
          className={`animateInRight ${styles.first_name}`}
          style={{ color: "#00ff99" }}
        >
          Abhishek Kumawat.
        </h1>
        <h5 className="animateDown">I build things for the web.</h5>
      </div>
      <div className={`animateInRight ${styles.inside}`}>
        <BucketProject></BucketProject>
        <BucketSkills></BucketSkills>
      </div>
    </div>
    // </Tilt>
  );
};

export default BucketName;
