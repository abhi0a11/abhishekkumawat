import React from "react";
import styles from "./BucketName.module.css";
import Tilt from "react-parallax-tilt";
const BucketName = () => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      style={{ flexBasis: "inherit" }}
      scale={1.01}
    >
      <div className={`animateUp ${styles.bucket_container} `}>
        <div className={`${styles.branding_info} text-white`}>
          <h1 className={`animateInLeft ${styles.greet}`}>Hello I'm</h1>
          <h1
            className={`animateInRight ${styles.first_name}`}
            style={{ color: "#00ff99" }}
          >
            Abhishek
          </h1>
          <h1
            className={`animateInRight ${styles.last_name}`}
            style={{ color: "#00ff99" }}
          >
            Kumawat
          </h1>
          <h5 className="animateDown">Full Stack Developer</h5>
        </div>
      </div>
    </Tilt>
  );
};

export default BucketName;
