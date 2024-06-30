import styles from "./LandingPage.module.css";
import resumePdf from "../assets/resume__abhi.pdf";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import abhishek from "../assets/branding-removebg.png";
const LandingPage = () => {
  return (
    <section
      id="brand"
      className={`bg-color-secondary text-white ${styles.display_branding}`}
    >
      <div className={`${styles.branding_info}`}>
        <h5>Full Stack Developer</h5>
        <h1>Hello I'm</h1>
        <h1 style={{ color: "#00ff99" }}>Abhishek Kumawat</h1>
        <p>
          I excel in crafting elegant digital experiances and I am proficient in
          various programming languages and technologies.
        </p>
        <div className={`${styles.branding_social}`}>
          <a
            download="resume"
            href={resumePdf}
            className={`btn-animated btn btn-green-outline btn-lg px-4  ${styles.resumeBtn}`}
          >
            Download CV
          </a>
          <div className={`${styles.mobile}`}>
            <div
              className={`btn-animated btn-green-outline ${styles.icon_div}`}
            >
              <a
                href="https://www.linkedin.com/in/abhishekkumawt/"
                target="_blank"
                className={`text-white ${styles.branding_btn}`}
              >
                <FaLinkedinIn className={`${styles.fa__icon__detail}`} />
              </a>
            </div>
            <div
              className={`btn-animated btn-green-outline ${styles.icon_div}`}
            >
              <a
                href="https://github.com/abhi0a11"
                target="_blank"
                className={`${styles.branding_btn} `}
              >
                <FiGithub className={`${styles.fa__icon__detail}`} />
              </a>
            </div>
            <div
              className={`btn-animated btn-green-outline ${styles.icon_div}`}
            >
              <a
                href="https://www.instagram.com/abhishekkumawt._/"
                target="_blank"
                className={`text-white ${styles.branding_btn}`}
              >
                <FaInstagram className={`${styles.fa__icon__detail}`} />
              </a>
            </div>
            <div
              className={`btn-animated btn-green-outline ${styles.icon_div}`}
            >
              <a
                href="https://x.com/AbhishekKu32163"
                target="_blank"
                className={`${styles.branding_btn} `}
              >
                <FaTwitter className={`${styles.fa__icon__detail}`} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={`${styles.image_container}`}> */}
      {/* <div className={`${styles.branding_image}`}> */}
      {/* <img
            // src="https://ik.imagekit.io/abhishekkumawat/abhishek_1.jpg?updatedAt=1719573870814"
            src={abhishek}
            className={`cmx-lg-auto img-fluid`}
            alt="Abhishek"
            loading="lazy"
          /> */}
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default LandingPage;
