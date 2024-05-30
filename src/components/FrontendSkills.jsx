import styles from "./TeckStack.module.css";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
const skills = [
  {
    logo: (
      <IoLogoHtml5
        style={{ width: "20px", height: "20px", color: "crimson" }}
      />
    ),
    lang: "HTML",
    percent: "90%",
  },
  {
    logo: (
      <IoLogoCss3
        style={{ width: "20px", height: "20px", color: "deepskyblue" }}
      />
    ),
    lang: "CSS",
    percent: "90%",
  },
  {
    logo: (
      <RiJavascriptFill
        style={{ width: "24x", height: "24px", color: "antiquewhite" }}
      />
    ),
    lang: "JAVASCRIPT",
    percent: "85%",
  },
  {
    logo: <FaReact style={{ width: "15px", height: "15px", color: "aqua" }} />,
    lang: "REACT.JS",
    percent: "85%",
  },
  {
    logo: <FaGitAlt style={{ width: "20px", height: "20px", color: "red" }} />,
    lang: "GIT Version Control",
    percent: "85%",
  },
];
const FrontendSkills = () => {
  return (
    <>
      <div className={`hidden ${styles.skillset}`}>
        {skills.map((data) => {
          return (
            <>
              <div>
                <div className={`${styles.skillset__item}`}>
                  <span>
                    {data.logo} &nbsp;
                    {data.lang}
                  </span>
                  <span>{data.percent}</span>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      border: "2px solid blue",
                      width: `${data.percent}`,
                    }}
                  ></div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default FrontendSkills;
