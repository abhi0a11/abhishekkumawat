import styles from "./TeckStack.module.css";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";

import FrontendSkills from "./FrontendSkills";
const TeckStack = () => {
  const [showFrontendSkills, setShowFrontendSkills] = useState(false);
  const [showBackendSkills, setShowBackendSkills] = useState(false);
  const [showCPSkills, setShowCPSkills] = useState(false);

  const handleFrontendClick = () => {
    // console.log(showFrontendSkills);
    const newShowSkill = !showFrontendSkills;
    setShowFrontendSkills(newShowSkill);
    newShowSkill && setShowBackendSkills(!newShowSkill);
    newShowSkill && setShowCPSkills(!newShowSkill);
  };
  const handleBackendClick = () => {
    const newShowSkill = !showBackendSkills;
    setShowBackendSkills(newShowSkill);
    newShowSkill && setShowFrontendSkills(!newShowSkill);
    newShowSkill && setShowCPSkills(!newShowSkill);
  };
  const handleCPClick = () => {
    // console.log(showCPSkills);
    const newShowSkill = !showCPSkills;
    setShowCPSkills(newShowSkill);
    newShowSkill && setShowBackendSkills(!newShowSkill);
    newShowSkill && setShowFrontendSkills(!newShowSkill);
  };
  const closeSkills = () => {
    showFrontendSkills && setShowFrontendSkills(false);
    showBackendSkills && setShowBackendSkills(false);
    showCPSkills && setShowCPSkills(false);
  };

  const toggleClasses = (toggle, query) => {
    const iconEl = document.querySelector(`${query}`);
    if (toggle) {
      iconEl.classList.add("fa__icon__rotate-up");
      iconEl.classList.remove("fa__icon__rotate-down");
    } else {
      iconEl.classList.add("fa__icon__rotate-down");
      iconEl.classList.remove("fa__icon__rotate-up");
    }
  };

  useEffect(() => {
    toggleClasses(showFrontendSkills, ".fa__icon__frontend");
    toggleClasses(showBackendSkills, ".fa-icon-backend");
    toggleClasses(showCPSkills, ".fa-icon-cp");
  }, [showFrontendSkills, showBackendSkills, showCPSkills]);

  return (
    <>
      <section
        className={`py-5 ${styles.height} ${styles.brandingContainer}  bg-color text-light world-className vh-100`}
        onClick={closeSkills}
        id="Skills"
      >
        <div className={`${styles.skills__heading}`}>
          <h2 className="fw-bold text-white lh-1 cutom-text-color">Skills</h2>
          <span>My technical level</span>
        </div>
        <div className={`${styles.skills__container}`}>
          <div className={`${styles.grid__item}`} onClick={handleFrontendClick}>
            <h1 style={{ color: "#7BC9FF" }}>Front-End Developer</h1>
            <div className="d-flex justify-content-between">
              <span>More than 1 year</span>
              <FaChevronDown className="fa__icon__frontend" />
            </div>
            {showFrontendSkills && <FrontendSkills></FrontendSkills>}
          </div>
          <div className={`${styles.grid__item}`} onClick={handleBackendClick}>
            <h1 style={{ color: "#7BC9FF" }}>Back-End Developer</h1>
            <div className="d-flex justify-content-between">
              <span>More than 1 year</span>
              <FaChevronDown className="fa-icon-backend" />
            </div>
            {showBackendSkills && <FrontendSkills></FrontendSkills>}
          </div>
          <div className={`${styles.grid__item}`} onClick={handleCPClick}>
            <h1 style={{ color: "#7BC9FF" }}>Competetive Programming </h1>
            <div className="d-flex justify-content-between">
              <span>More than 1 year</span>
              <FaChevronDown className="fa-icon-cp" />
            </div>
            {showCPSkills && <FrontendSkills></FrontendSkills>}
          </div>
        </div>
      </section>
      {/* <div className="divider"></div> */}
    </>
  );
};

export default TeckStack;

{
  /*<div className="m-5 d-flex align-items-center justify-content-center  d-flex align-items-center justify-content-center">
   <IoLogoHtml5
    style={{ width: "80px", height: "80px", color: "crimson" }}
  />
  <div>
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
  </div>
</div>
<div className="m-5 d-flex align-items-center justify-content-center  d-flex align-items-center justify-content-center">
  <IoLogoCss3
    style={{ width: "80px", height: "80px", color: "deepskyblue" }}
  />
  <div>
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
  </div>
</div>
<div className="m-5 d-flex align-items-center justify-content-center ">
  <RiJavascriptFill
    style={{
      width: "80px",
      height: "80px",
      color: "antiquewhite",
    }}
  />
  <div>
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStarHalfStroke style={{ margin: "0px 15px" }} />
    <FaRegStar style={{ margin: "0px 15px" }} />
    <FaRegStar style={{ margin: "0px 15px" }} />
  </div>
</div>
<div className="m-5 d-flex align-items-center justify-content-center ">
  <FaReact style={{ width: "80px", height: "80px", color: "aqua" }} />
  <div>
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStar style={{ margin: "0px 15px" }} />
    <FaStarHalfStroke style={{ margin: "0px 15px" }} />
    <FaRegStar style={{ margin: "0px 15px" }} />
    <FaRegStar style={{ margin: "0px 15px" }} />
  </div>
</div> */
}
{
  /* <div
  className="progress mx-5"
  role="progressbar"
  aria-label="Basic example"
  aria-valuenow="100"
  aria-valuemin="0"
  aria-valuemax="100"
  style={{ height: "5%" }}
>
  <div class="progress-bar" style={{ width: "100%" }}>
    HTML
  </div>
</div>
<div
  class="progress mx-5 my-3"
  role="progressbar"
  aria-label="Basic example"
  aria-valuenow="25"
  aria-valuemin="0"
  aria-valuemax="100"
  style={{ height: "5%" }}
>
  <div class="progress-bar" style={{ width: "100%" }}>
    CSS
  </div>
</div>
<div
  class="progress mx-5 my-3"
  role="progressbar"
  aria-label="Basic example"
  aria-valuenow="50"
  aria-valuemin="0"
  aria-valuemax="100"
  style={{ height: "5%" }}
>
  <div class="progress-bar" style={{ width: "80%" }}>
    JS
  </div>
</div>
<div
  class="progress mx-5 my-3"
  role="progressbar"
  aria-label="Basic example"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"
  style={{ height: "5%" }}
>
  <div class="progress-bar" style={{ width: "75%" }}>
    REACT.JS
  </div>
</div> */
}
