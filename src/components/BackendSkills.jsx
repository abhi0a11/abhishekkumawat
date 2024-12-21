import styles from "./Backend.module.css";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiWebrtc } from "react-icons/si";
const skills = [
  {
    logo: <FaNodeJs className={`${styles.logo}`} />,
    lang: "NodeJS",
  },
  {
    logo: <SiExpress className={`${styles.logo}`} />,
    lang: "Express JS",
  },
  {
    logo: <SiMongodb className={`${styles.logo}`} />,
    lang: "Mongo DB",
  },
  {
    logo: <SiSocketdotio className={`${styles.logo}`} />,
    lang: "Socket io",
  },
  {
    logo: <TbBrandMysql className={`${styles.logo}`} />,
    lang: "SQL",
  },
  {
    logo: <SiWebrtc className={`${styles.logo}`} />,
    lang: "Web RTC(PeerJS)",
  },
];
const BackendSkills = () => {
  return (
    <section className={`${styles.section_front}`}>
      {skills.map((data, i) => (
        <div key={i} className={`${styles.technical__bars}`}>
          <span>{data.logo}</span>
          <span>{data.lang}</span>
        </div>
      ))}
    </section>
  );
};

export default BackendSkills;
