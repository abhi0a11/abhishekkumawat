import styles from "./LandingPage.module.css";
import resumePdf from "../assets/Resume.pdf";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const LandingPage = () => {
  return (
    <section
      id="brand"
      className={`bg-color-primary text-white ${styles.display_branding}`}
    >
      <div className={`${styles.branding_info}`}>
        <h5 className="animateDown">Hi, my name is</h5>
        {/* <h1 className="animateInLeft">Hello I'm</h1> */}
        <h1 className="animateInRight">Abhishek Kumawat.</h1>
        <h2 className="animateInRight">I build things for the web.</h2>

        <div className={`${styles.branding_social} `}>
          <a
            download="resume"
            href={resumePdf}
            className={`animateUp btn-animated btn btn-green-outline btn-lg px-4 ${styles.resumeBtn} `}
          >
            Download CV
          </a>
          <div className={`${styles.mobile}`}>
            <div
              className={`btn-animated btn-green-outline ${styles.icon_div} animateUp`}
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
              className={`btn-animated btn-green-outline ${styles.icon_div} animateUp`}
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
    </section>
  );
};

export default LandingPage;
