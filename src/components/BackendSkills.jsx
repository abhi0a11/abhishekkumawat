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
    lang: "Node.Js",
    percent: "90%",
  },
  {
    logo: (
      <RiJavascriptFill
        style={{ width: "24x", height: "24px", color: "antiquewhite" }}
      />
    ),
    lang: "Express.js",
    percent: "90%",
  },
  {
    logo: <FaReact style={{ width: "15px", height: "15px", color: "aqua" }} />,
    lang: "PUG and EJS",
    percent: "95%",
  },
  {
    logo: <FaGitAlt style={{ width: "20px", height: "20px", color: "red" }} />,
    lang: "MongoDb",
    percent: "90%",
  },
];
const BackendSkills = () => {
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

export default BackendSkills;
