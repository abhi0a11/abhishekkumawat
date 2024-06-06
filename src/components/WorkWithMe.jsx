import { useEffect } from "react";
import styles from "./WorkWithMe.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
const WorkWithMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: false,
    });
  }, []);
  return (
    <>
      <div className={`border-2 bg-color text-center `}>
        <div
          className="container container--center "
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-duration="1500"
        >
          <h4
            className={`${styles.head2} align-items-center d-flex flex-column ${styles.padding}`}
          >
            Interested in working&nbsp;with&nbsp;me?
          </h4>
          <br />
          <br />
          <div
            id="a"
            className="cta-link cta-link--hero text-decoration-underline "
            style={{ transform: "translate(0px, 0px) scale(1, 1)" }}
          >
            {/* <div className="cta-link-text">
              <a
                href="#"
                className={`btn btn-outline-light btn-lg px-4 me-sm-3 my-4 ${styles.btn__projectRequest}`}
              >
                Start a project request
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkWithMe;
