import styles from "./Portfolio.module.css";
import lunchtime from "../assets/lunchttime.jpg";
import guessTheNumber from "../assets/guess-the-number.png";
import forkify from "../assets/forkify.jpg";
import pigGame from "../assets/pig-game.png";
import { useState } from "react";

import { FiGithub } from "react-icons/fi";
import { GrNext, GrPrevious } from "react-icons/gr";
import { PiLinkBold } from "react-icons/pi";
const Portfolio = () => {
  const project = [
    {
      id: "01",
      name: "Whatsapp Clone",
      image: forkify,
      project: "MERN Stack",
      image_url:
        "https://ik.imagekit.io/abhishekkumawat/w1.png?updatedAt=1720339691313",
      description: [
        // "Real-time messaging via Socket.IO for seamless communication.",
        // "Video calling functionality using simple-peer",
        // "I Implemented secure user access and data protection using JWT access and refreshtokens.",
        // "Group chat features,facilitating effortless creation and participation in discussions.",
        // "Utilized Redux and Redux Persist for efficient state management,ensuring seamless data persistence",
        // "Real-time messaging and group chat with Socket.IO, and implemented video calling using simple-peer",
        // "Secured user access and data protection with JWT tokens, and managed state with Redux and Redux Persist for efficient data persistence.",
        "WhatsApp Web clone developed with group chat and video calling features. It replicates the core functionalities of WhatsApp Web, allowing users to chat in groups, share media, and conduct video calls seamlessly in real time.",
      ],
      link: "https://ws-app-clone.netlify.app/",
      git_link: "https://github.com/abhi0a11",
      category: [
        "ReactJS",
        "MongoDb",
        "Socket.io",
        "simple-peer",
        "NodeJS",
        "ExpressJS",
      ],
      js: true,
    },
    {
      id: "02",
      name: "GoSHopping",
      project: "Full Stack Project",
      image_url:
        "https://res.cloudinary.com/daiwqouix/image/upload/v1732959212/goshop_lg2qyn.png",
      description: [
        "A Mern Stack E-commerce App.",
        "Authentication is done to give access to only verified users",
      ],
      link: "https://go-shopping121.netlify.app/",
      git_link:
        "https://github.com/abhi0a11?tab=overview&from=2024-12-01&to=2024-12-21",
      category: ["NodeJS", "ExpressJS", "MongoDB", "React"],
      js: true,
      game: false,
    },
    {
      id: "03",
      name: "Forkify",
      image: forkify,
      project: "frontend project",
      image_url:
        "https://ik.imagekit.io/abhishekkumawat/tr:ar-3-2/forkify.jpg?updatedAt=1719573871091",
      description: [
        "Recipe Finder application built using JavaScript. It allows users to search for recipes based on ingredients, cuisine types, or specific dish names, providing a convenient way to discover new cooking ideas.",
        // "Implemented Fetching data and Sending data back to API asynchronously.",
        // "Implemented pagination to render only subset of fetched results on a page.",
        // "Optimised the application to rerender on the fields requested using javascript",
      ],
      link: "https://forkify-abhishek.netlify.app/",
      git_link: "https://github.com/abhi0a11/Forkify",
      category: ["Javascript", "html", "css"],
      js: true,
    },
    {
      id: "04",
      name: "Snake Game",
      project: "frontend project",
      image: guessTheNumber,
      image_url:
        "https://ik.imagekit.io/abhishekkumawat/snake%20Game.png?updatedAt=1720241756248",
      description: [
        "A Javascript Snake game.",
        "Increases speed on eating food.",
        "Dies on touching walls or itsef.",
      ],
      link: "https://snake-game-retrostyle.netlify.app/",
      git_link: "https://github.com/abhi0a11/Snake-Game",
      category: ["Javascript", "game"],
      js: true,
      game: true,
    },
    {
      id: "05",
      name: "Guess The Number",
      project: "frontend project",

      image: guessTheNumber,
      image_url:
        "https://ik.imagekit.io/abhishekkumawat/guess-the-number.png?updatedAt=1719573870728",
      description: [
        "A Javascript guessing the number game",
        "Logic build using Math.random() JS function.",
      ],
      link: "https://abhi0a11.github.io/Guess-the-number/",
      git_link: "https://github.com/abhi0a11/Guess-the-number",
      category: ["Javascript", "game"],
      js: true,
      game: true,
    },
    {
      id: "06",
      name: "Pig Game",
      project: "frontend project",
      image: pigGame,
      image_url:
        "https://ik.imagekit.io/abhishekkumawat/pig-game.png?updatedAt=1719573871017",
      description: [
        "A Javascript Dice game",
        "When one comes on the dice, current score turns to zero.",
        "To add your current score to score HOLD it, on holding you will loose your turn.",
      ],
      link: "https://abhi0a11.github.io/Pig-Game/",
      git_link: "https://github.com/abhi0a11/Pig-Game",
      category: ["Javascript", "Game"],
      js: true,
      game: true,
    },
    {
      id: "07",
      name: "Lunch Time",
      project: "Frontend project",

      image: lunchtime,
      image_url:
        "https://ik.imagekit.io/abhishekkumawat/lunchttime.jpg?updatedAt=1719573870999",
      description: [
        "A web application that helps you plan your lunch with your friends and family.",
      ],
      link: "https://abhi0a11.github.io/LunchTime/",
      git_link: "https://github.com/abhi0a11/LunchTime",
      category: ["HTML", "CSS", "Javascript"],
      js: false,
    },
  ];
  const n = project.length;
  const [index, setIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = (((index - 1) % n) + n) % n;
    setIndex(newIndex);
  };
  const handleNextClick = () => {
    const newIndex = (index + 1) % n;
    setIndex(newIndex);
  };

  return (
    <div
      className={`col-xxl-12 px-4 py-5 ${styles.portfolioContainer} container-fluid`}
      id="portfolio-id"
    >
      <div className="container-fluid " id="custom-cards">
        <h1
          className={`pb-2 text-center kablammo-font ${styles.portfolioMainHeading} `}
        >
          Projects
        </h1>
      </div>

      <div className={`text-white ${styles.container_portfolio}`}>
        <div className={`${styles.project_detail}`}>
          <div className={`${styles.project_title}`}>
            <div className={`kablammo-font ${styles.project_serial}`}>
              {project[index].id}
            </div>
            <div className={`kablammo-font ${styles.project_Heading}`}>
              {project[index].name}
            </div>
          </div>
          <div className={` ${styles.project_title}`}>
            <div
              className={`kablammo-font ${styles.project_Heading}`}
              style={{ margin: 0 }}
            >
              {project[index].project}
            </div>
          </div>

          <div className={`${styles.project_info}`}>
            {project[index].description.map((des, i) => (
              <p key={i} className={`${styles.project_summary}`}>
                {des}
              </p>
            ))}

            <p className={`${styles.project_tags}`}>
              {project[index].category.map((categ, i) => (
                <span key={i} className={`${styles.danfo_unique}`}>
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
          <a href={project[index].link} target="_blank">
            <img src={project[index].image_url} alt={project[index].name} />
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
