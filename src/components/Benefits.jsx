import styles from "./Benefits.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Benefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: false,
    });
  }, []);
  return (
    <>
      <div className={`${styles.benefits} bg-color`}>
        <div
          className={`${styles.clean} col-6 shadow-lg rounded-5 mx-2`}
          data-aos="zoom-in-down"
          data-aos-offset="0"
        >
          <h4>Clean code</h4>
          <br />
          <div className="cln-card">
            <span className={`${styles.codeColor}`}>&lt;ul&gt;</span>{" "}
          </div>
          <div className="cln-card">
            <span className={`${styles.codeColor}`}>&lt;li&gt;</span>Semantic
            HTML.
            <span className={`${styles.codeColor}`}>&lt;/li&gt;</span>
          </div>
          <div className="cln-card">
            <span className={`${styles.codeColor}`}>&lt;li&gt;</span>ClassName
            naming system.
            <span className={`${styles.codeColor}`}>&lt;/li&gt;</span>
          </div>
          <div className="cln-card">
            <span className={`${styles.codeColor}`}>&lt;li&gt;</span>Optimized
            for performance.
            <span className={`${styles.codeColor}`}>&lt;/li&gt;</span>
          </div>
          <div>
            <span className={`${styles.codeColor}`}>&lt;/ul&gt;</span>
          </div>
        </div>

        <div
          className={`${styles.weeks}  col-6 shadow-lg rounded-5`}
          data-aos="zoom-in-down"
          data-aos-offset="0"
        >
          <h6 className={`${styles.head3} text-center`}>
            Development duration
          </h6>
          <br />
          <br />
          <div className={`${styles.sbTxt1} text-center`}>
            {" "}
            <s>Months</s>
          </div>
          <div className={`${styles.sbTxt2} text-center`}> Weeks</div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
