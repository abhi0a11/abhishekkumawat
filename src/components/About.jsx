import styles from "./About.module.css";
import abhishek from "../assets/abhishek_1.jpg";
const About = () => {
  return (
    <>
      <section
        className={`py-5 text-center bg-color text-light world-className vh-100 ${styles.displayBranding}`}
        style={{ height: "600px" }}
        id="AboutMe"
      >
        <div className={`${styles.heading}`}>
          <h2 className="fw-bold text-white lh-1 cutom-text-color">About me</h2>
          <span>My introduction</span>
        </div>
        <div class=" col-12 px-4 py-5">
          <div class="row flex-lg-row align-items-center g-5 py-5 justify-content-center">
            <div class="col-4">
              <img
                src={abhishek}
                class={`d-block mx-lg-auto img-fluid ${styles.imgMine}`}
                alt="Bootstrap Themes"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3 text-white">
                Hello I'm a Abhishek Kumawat web designer based in Delhi,INDIA.
              </h1>
              <p className={`lead text-white text-white`}>
                Designer expert in creating user centered websites.Passionte
                about created websites with beautiful interfaces. I have a
                strong attention to detail, I like to update my knowledge
                everytime learning new tools and trends and provide innovative
                solutions.
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-center">
                <a
                  download="resume"
                  href="../resume__abhi.pdf"
                  className="btn btn-outline-info btn-lg px-4 me-md-2"
                >
                  My Resume
                </a>

                <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg px-4"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
