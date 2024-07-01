import styles from "./AboutDesktop.module.css";
import abhishek from "../assets/abhishek_1.jpg";
import resumePdf from "../assets/resume__abhi.pdf";

const AboutDesktop = () => {
  return (
    <>
      <section
        className={`py-5 bg-color-primary text-light world-className vh-100 ${styles.displayBranding} `}
        style={{ height: "600px" }}
        id="AboutMe"
      >
        <div className={` ${styles.img_box}`}>
          <img
            src={abhishek}
            className={`d-block mx-lg-auto img-fluid ${styles.imgMine}`}
            alt="Bootstrap Themes"
            loading="lazy"
          />
        </div>

        <div className={`${styles.heading} `}>
          <h2 className={`fw-bold cutom-text-color ${styles.head__about}`}>
            About me
          </h2>
          <p className={`lead text-white ${styles.intro__subpara}`}>
            Hello I'm a{" "}
            <span className="cutom-text-color fw-bold"> Abhishek Kumawat </span>
            web designer based in Delhi,INDIA. Designer expert in creating user
            centered websites.Passionte about created websites with beautiful
            interfaces. I have a strong attention to detail, I like to update my
            knowledge everytime learning new tools and trends and provide
            innovative solutions.
          </p>
          <div className={`d-grid gap-2 d-md-flex ${styles.btn__container}`}>
            <a
              download="resume"
              href={resumePdf}
              className={`btn-animated btn btn-green-outline btn-lg px-4 me-md-2 ${styles.btn_about}`}
            >
              My Resume
            </a>

            <a
              type="button"
              className={`btn-animated btn btn-green-outline btn-lg px-4 ${styles.btn_about}`}
              href="#Contact-Form"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutDesktop;
