import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section
      className={`bg-color text-white ${styles.section__skills}`}
      id="Skills"
    >
      <div className={`${styles.container1}`}>
        <h1 className={`${styles.heading1}`}>FrontEnd Skills</h1>
        <div className={`${styles.technical__bars}`}>
          <div className={`${styles.bar}`}>
            <div className={`${styles.info}`}>
              <span className="">HTML</span>
            </div>
            <div className={`${styles.progress__line} ${styles.html}`}>
              <span></span>
            </div>
          </div>
        </div>
        <div className={`${styles.technical__bars}`}>
          <div className={`${styles.bar}`}>
            <div className={`${styles.info}`}>
              <span className="">CSS</span>
            </div>
            <div className={`${styles.progress__line} ${styles.css}`}>
              <span></span>
            </div>
          </div>
        </div>
        <div className={`${styles.technical__bars}`}>
          <div className={`${styles.bar}`}>
            <div className={`${styles.info}`}>
              <span className="">Javascript</span>
            </div>
            <div className={`${styles.progress__line} ${styles.js}`}>
              <span></span>
            </div>
          </div>
        </div>
        <div className={`${styles.technical__bars}`}>
          <div className={`${styles.bar}`}>
            <div className={`${styles.info}`}>
              <span className="">React</span>
            </div>
            <div className={`${styles.progress__line} ${styles.react}`}>
              <span></span>
            </div>
          </div>
        </div>

        <div className={`${styles.technical__bars}`}>
          <div className={`${styles.bar}`}>
            <div className={`${styles.info}`}>
              <span className="">Bootstrap</span>
            </div>
            <div className={`${styles.progress__line} ${styles.mongodb}`}>
              <span></span>
            </div>
          </div>
        </div>
        <div className={`${styles.technical__bars}`}>
          <div className={`${styles.bar}`}>
            <div className={`${styles.info}`}>
              <span className="">Tailwind</span>
            </div>
            <div className={`${styles.progress__line} ${styles.mongodb}`}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.container1}`}>
        <h1 className={`${styles.heading1}`}>Backend Skills</h1>

        <div className={`${styles.technical__bars}`}>
          <div className={`${styles.bar}`}>
            <div className={`${styles.info}`}>
              <span className="">Node Js</span>
            </div>
            <div className={`${styles.progress__line} ${styles.nodejs}`}>
              <span></span>
            </div>
          </div>
        </div>

        <div className={`${styles.technical__bars}`}>
          <div className={`${styles.bar}`}>
            <div className={`${styles.info}`}>
              <span className="">Express JS</span>
            </div>
            <div className={`${styles.progress__line} ${styles.expressjs}`}>
              <span></span>
            </div>
          </div>
        </div>
        <div className={`${styles.technical__bars}`}>
          <div className={`${styles.bar}`}>
            <div className={`${styles.info}`}>
              <span className="">MongoDb</span>
            </div>
            <div className={`${styles.progress__line} ${styles.mongodb}`}>
              <span></span>
            </div>
          </div>
        </div>
        <div className={`${styles.technical__bars}`}>
          <div className={`${styles.bar}`}>
            <div className={`${styles.info}`}>
              <span className="">GIT</span>
            </div>
            <div className={`${styles.progress__line} ${styles.git}`}>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={`${styles.container1}`}>
        <h1 className={`${styles.heading1}`}> Professional SKills</h1>
        <div className={`${styles.radial__bars}`}>
          <div className={`${styles.radial__bar}`}>
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle
                className={`${styles.progress__bar}`}
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle
                className={`${styles.path} ${styles.path2}}`}
                cx="100"
                cy="100"
                r="80"
              ></circle>
            </svg>
            <div className={`${styles.percentage}`}>90%</div>
            <div className={`${styles.text}`}>Createivity</div>
          </div>
          <div className={`${styles.radial__bar}`}>
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle
                className={`${styles.progress__bar}`}
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle
                className={`${styles.path} ${styles.path3}}`}
                cx="100"
                cy="100"
                r="80"
              ></circle>
            </svg>
            <div className={`${styles.percentage}`}>90%</div>
            <div className={`${styles.text}`}>Createivity</div>
          </div>
          <div className={`${styles.radial__bar}`}>
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle
                className={`${styles.progress__bar}`}
                cx="100"
                cy="100"
                r="80"
              ></circle>
              <circle
                className={`${styles.path} ${styles.path4}}`}
                cx="100"
                cy="100"
                r="80"
              ></circle>
            </svg>
            <div className={`${styles.percentage}`}>90%</div>
            <div className={`${styles.text}`}>Createivity</div>
          </div>
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default Skills;
{
  /*
        html = #c95d2e
        css = #147bbc
        js = #b0bc1e
        react = #69bcbc

    */
}
