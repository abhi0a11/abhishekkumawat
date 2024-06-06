import styles from "./AboutMobile.module.css";
import abhishek from "../assets/abhishek_1.jpg";
import resumePdf from "../assets/resume__abhi.pdf";

const AboutMobile = () => {
  return (
    <>
      <section
        className={`py-5 text-center bg-color text-light world-className vh-100 ${styles.displayBranding}`}
        style={{ height: "600px" }}
        id="AboutMe"
      >
        <div className={`${styles.heading}`}>
          <h2
            className={`fw-bold text-white lh-1 cutom-text-color ${styles.head__about}`}
          >
            About me
          </h2>
          <span className={`${styles.subhead__about}`}>My introduction</span>
        </div>
        <div className=" col-12 px-4 py-5">
          <div className="row flex-lg-row align-items-center g-5 py-5 justify-content-center">
            <div className={`col-4 ${styles.img_box}`}>
              <img
                src={abhishek}
                className={`d-block mx-lg-auto img-fluid ${styles.imgMine}`}
                alt="Bootstrap Themes"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1
                className={`display-5 fw-bold lh-1 mb-3 text-white ${styles.intro__para}`}
              >
                Hello I'm a Abhishek Kumawat web designer based in Delhi,INDIA.
              </h1>
              <p
                className={`lead text-white text-white ${styles.intro__subpara}`}
              >
                Designer expert in creating user centered websites.Passionte
                about created websites with beautiful interfaces. I have a
                strong attention to detail, I like to update my knowledge
                everytime learning new tools and trends and provide innovative
                solutions.
              </p>
              <div
                className={`d-grid gap-2 d-md-flex justify-content-center ${styles.btn__container}`}
              >
                <a
                  download="resume"
                  href={resumePdf}
                  className={`btn-animated btn btn-blue btn-outline-info btn-lg px-4 me-md-2 ${styles.btn_about}`}
                >
                  My Resume
                </a>

                <a
                  type="button"
                  className={`btn-animated btn btn-grey btn-outline-secondary btn-lg px-4 ${styles.btn_about}`}
                  href="#Contact-Form"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMobile;
