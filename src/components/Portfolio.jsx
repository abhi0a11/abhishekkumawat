import styles from "./Portfolio.module.css";
import lunchtime from "../assets/lunchttime.jpg";
import guessTheNumber from "../assets/guess-the-number.png";
import forkify from "../assets/forkify.jpg";
import pigGame from "../assets/pig-game.png";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { GrNext, GrPrevious } from "react-icons/gr";
import { PiLinkBold } from "react-icons/pi";
const Portfolio = () => {
  const [n, setN] = useState(4);
  const project_data = [
    {
      id: "01",
      name: "Forkify",
      image: forkify,
      image_url:
        "https://ik.imagekit.io/abhishekkumawat/forkify.jpg?updatedAt=1719573871091",
      description: [
        "A web application that helps you search for recipes and save them.",
        "Implemented Fetching data and Sending data back to API asynchronously.",
        " Implemented pagination to render only subset of fetched results on a page.",
        " User can navigate through different pages to access remaining search results. ",
      ],
      link: "https://forkify-abhishek.netlify.app/",
      git_link: "https://github.com/abhi0a11/Forkify",
      category: ["Javascript", "html", "css"],
      js: true,
    },
    {
      id: "02",
      name: "Lunch Time",
      image: lunchtime,
      image_url:
        "https://ik.imagekit.io/abhishekkumawat/lunchttime.jpg?updatedAt=1719573870999",
      description: [
        "A web application that helps you plan your lunch with your friends and family.",
      ],
      link: "https://abhi0a11.github.io/LunchTime/",
      git_link: "https://github.com/abhi0a11/LunchTime",
      category: ["html", "css"],
      js: false,
    },
    {
      id: "03",
      name: "Guess The Number",
      image: guessTheNumber,
      image_url:
        "https://ik.imagekit.io/abhishekkumawat/guess-the-number.png?updatedAt=1719573870728",
      description: [
        "A web application that helps you guess the number between 1 to 100.",
      ],
      link: "https://abhi0a11.github.io/Guess-the-number/",
      git_link: "https://github.com/abhi0a11/Guess-the-number",
      category: ["Javascript", "game"],
      js: true,
      game: true,
    },
    {
      id: "04",
      name: "Pig Game",
      image: pigGame,
      image_url:
        "https://ik.imagekit.io/abhishekkumawat/pig-game.png?updatedAt=1719573871017",
      description: [
        "A web application that helps you guess the number between 1 to 100.",
      ],
      link: "https://abhi0a11.github.io/Pig-Game/",
      git_link: "https://github.com/abhi0a11/Pig-Game",
      category: ["Javascript", "game"],
      js: true,
      game: true,
    },
  ];
  const [index, setIndex] = useState(0);
  const [project, setProject] = useState(project_data);

  const handlePrevClick = () => {
    const newIndex = (((index - 1) % n) + n) % n;
    setIndex(newIndex);
  };
  const handleNextClick = () => {
    const newIndex = (index + 1) % n;
    setIndex(newIndex);
  };
  const handleAllClick = () => {
    document.querySelectorAll(".all").forEach((element) => {
      element.classList.remove("js_hidden");
    });
    setProject(project_data);
    setIndex(0);
    setN(project_data.length);
  };
  const handleGameClick = () => {
    const game_data = project_data.filter((element) => element.game === true);
    setProject(game_data);
    setIndex(0);
    setN(game_data.length);
  };
  const handleJsClick = () => {
    document.querySelectorAll(".js").forEach((element) => {
      if (element.classList.contains("js_hidden")) {
        element.classList.remove("js_hidden");
        element.classList.add("js_show");
      } else {
        element.classList.toggle("js_hidden");
      }
    });

    const js_data = project_data.filter((element) => element.js === true);
    setProject(js_data);
    setIndex(0);
    setN(js_data.length);
  };

  return (
    <div
      className={`col-xxl-12 px-4 py-5 ${styles.portfolioContainer} container-fluid`}
      id="portfolio-id"
    >
      <div className="container-fluid " id="custom-cards">
        <h1 className={`pb-2 text-center ${styles.portfolioMainHeading} `}>
          Projects
        </h1>
      </div>
      <div className={`text-center ${styles.projectBtn}`}>
        <button
          className={`btn btn-lg ${styles.btnPortfolio}`}
          onClick={handleAllClick}
        >
          All
        </button>
        <button className={`btn btn-lg btn ${styles.btnPortfolio}`}>
          React.js
        </button>
        <button
          className={`btn btn-lg ${styles.btnPortfolio}`}
          onClick={handleJsClick}
        >
          Javascript
        </button>
        <button
          className={`btn btn-lg ${styles.btnPortfolio}`}
          onClick={handleGameClick}
        >
          Game
        </button>
      </div>

      <div className={`text-white ${styles.container_portfolio}`}>
        <div className={`${styles.project_detail}`}>
          <div className={`${styles.project_title}`}>
            <div className={`${styles.project_serial}`}>
              {project[index].id}
            </div>
            <div className={`${styles.project_Heading}`}>
              {project[index].name}
            </div>
          </div>

          <div className={`${styles.project_info}`}>
            {project[index].description.map((des) => (
              <p className={`${styles.project_summary}`}>{des}</p>
            ))}

            <p className={`${styles.project_tags}`}>
              {project[index].category.map((categ) => (
                <span className={`${styles.danfo_unique}`}>
                  {"#" + categ.toUpperCase() + " "}
                </span>
              ))}
            </p>
          </div>
          <div className={`${styles.mobile}`}>
            <div
              className={`btn-animated btn-green-outline ${styles.icon_div}`}
            >
              <a
                href={project[index].link}
                target="_blank"
                className={`text-white ${styles.branding_btn}`}
              >
                <PiLinkBold
                  className={`${styles.fa__icon__detail} ${styles.fa__icon__detail_hover}`}
                />
              </a>
            </div>
            <div
              className={`btn-animated btn-green-outline ${styles.icon_div}`}
            >
              <a
                href={project[index].git_link}
                target="_blank"
                className={`${styles.branding_btn} `}
              >
                <FiGithub className={`${styles.fa__icon__detail}`} />
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.project_icon}`}>
          <a href={project[index].image_url} target="_blank">
            <img
              src={project[index].image}
              srcSet={`${project[index].image_url} 1x, ${project[index].image_url} 2x`}
              alt={project[index].name}
              loading="lazy"
            />
          </a>
          <div className={`${styles.project_navigation}`}>
            <button
              type="button"
              className={`text-white btn ${styles.prev_project}`}
              onClick={handlePrevClick}
            >
              {/* PREV */}
              <GrPrevious />
            </button>
            <button
              type="button"
              className={`text-white btn ${styles.next_project}`}
              onClick={handleNextClick}
            >
              <GrNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
