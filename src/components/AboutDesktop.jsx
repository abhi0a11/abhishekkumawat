import styles from "./AboutDesktop.module.css";
import abhishek from "../assets/abhishek_1.jpg";
import formals_photo from "../assets/abhi_edit1.jpg";
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
            // src={abhishek}
            src={formals_photo}
            className={`d-block mx-lg-auto img-fluid ${styles.imgMine}`}
            alt="Bootstrap Themes"
            loading="lazy"
          />
        </div>

        <div className={`${styles.heading} `}>
          <h2
            className={`fw-bold cutom-text-color kablammo-font ${styles.head__about}`}
          >
            About me
          </h2>
          <p className={`lead text-white ${styles.intro__subpara}`}>
            Hello I'm{" "}
            <span className="cutom-text-color fw-bold">
              {" "}
              Abhishek Kumawat,{" "}
            </span>
            web designer based in Delhi,INDIA. Designer expert in creating user
            centered websites.Passionte about created websites with beautiful
            interfaces. I have a strong attention to detail, I like to update my
            knowledge everytime learning new tools and trends and provide
            innovative solutions.
          </p>
          <div className={`${styles.personal_details}`}>
            <div className={`${styles.detail}`}>
              <p className={`${styles.detail_head}`}>Name</p>
              <p className={`${styles.detail_info}`}>Abhishek Kumawat</p>
            </div>
            <div className={`${styles.detail}`}>
              <p className={`${styles.detail_head}`}>Email</p>
              <p className={`${styles.detail_info}`}>
                abhishekkumawat.ak21@gmail.com
              </p>
            </div>
            <div className={`${styles.detail}`}>
              <p className={`${styles.detail_head}`}>Leetcode</p>
              <p className={`${styles.detail_info}`}>
                <a
                  className={`${styles.link}`}
                  href="https://leetcode.com/u/abhishek_123321/"
                  target="_blank"
                >
                  Browse Profile
                </a>
              </p>
            </div>
            <div className={`${styles.detail}`}>
              <p className={`${styles.detail_head}`}>Nationality</p>
              <p className={`${styles.detail_info}`}>Indian</p>
            </div>
            <div className={`${styles.detail}`}>
              <p className={`${styles.detail_head}`}>Language</p>
              <p className={`${styles.detail_info}`}>Hindi, English</p>
            </div>
            <div className={`${styles.detail}`}>
              <p className={`${styles.detail_head}`}>Development</p>
              <p className={`${styles.detail_info}`}>Full Stack Developer</p>
            </div>
          </div>
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
