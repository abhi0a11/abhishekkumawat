import styles from "./Experience.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";
const Exp = [
  {
    year: "03 July - 02 Aug 2024",
    name: "Roxwell Technologies Pvt. Ltd.",
    designation: "Full Stack Itern",
    work: [
      "Designing and developing the user interface project’s requirements.",
      "Developed RESTful API's to facilitate secure and efficient communication between the frontend and backend.",
      "Designed and implemented various form layouts as per the project's design specifications, ensuring seamless data collection and user interaction.",
    ],
  },
];
const Experience = () => {
  return (
    <section className={`${styles.section_front}`}>
      {Exp.map((data, i) => (
        <div key={i} className={`${styles.exp}`}>
          <p className={`${styles.year}`}>
            {data.year}{" "}
            <a
              className={`${styles.link}`}
              href="https://drive.google.com/file/d/1GR9ow1zQgpSZGpGRT3gkltWr8gslk2tv/view?usp=drive_link"
              target="_blank"
            >
              <FaExternalLinkAlt />
            </a>
          </p>
          <p className={`${styles.institue}`}>{data.name}</p>
          <p className={`${styles.course}`}>{data.designation}</p>
          <div className={`${styles.grade}`}>
            <ul>
              {data.work.map((info, i) => (
                <li key={i}>{info}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
